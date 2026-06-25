/**
 * Smart Lock · Nightwatch → Results API sync
 * CommonJS format to match nightwatch.conf.js (module.exports)
 * 
 * Already wired up via globals_path: './nightwatch-hook.js' in nightwatch.conf.js
 */

const fs   = require('fs');
const path = require('path');
const http = require('http');

const API_URL = 'http://localhost:3001/api/test-run';

function findLatestReport(reportsDir) {
  if (!fs.existsSync(reportsDir)) return null;
  const files = fs.readdirSync(reportsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => ({ f, mtime: fs.statSync(path.join(reportsDir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  return files.length ? path.join(reportsDir, files[0].f) : null;
}

function postResult(data) {
  return new Promise((resolve) => {
    const body = JSON.stringify(data);
    const req = http.request(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      },
    }, (res) => {
      let raw = '';
      res.on('data', d => raw += d);
      res.on('end', () => {
        console.log('\n✅ [nightwatch-hook] Synced to Results API:', raw);
        resolve();
      });
    });
    req.on('error', (e) => {
      console.warn('\n⚠️  [nightwatch-hook] Could not reach Results API — is it running?');
      console.warn('   → cd results-api && npm start\n', e.message);
      resolve();
    });
    req.write(body);
    req.end();
  });
}

module.exports = {
  // Runs once after ALL test suites finish
  after: async function(done) {
    try {
      const reportsDir = path.resolve('reports');
      const reportFile = findLatestReport(reportsDir);

      if (!reportFile) {
        console.warn('[nightwatch-hook] No JSON report found in', reportsDir);
        return done();
      }

      const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));

      const passed   = report.passed   ?? 0;
      const failed   = report.failed   ?? 0;
      const skipped  = report.skipped  ?? 0;
      const errors   = report.errors   ?? 0;
      const total    = report.tests    ?? (passed + failed + skipped);
      const duration = report.duration ?? report.time ?? 0;

      const suiteNames = Object.keys(report.modules || {});
      const label = suiteNames.length
        ? `${new Date().toLocaleDateString('en-GB')} · ${suiteNames[0]}`
        : new Date().toLocaleDateString('en-GB');

      await postResult({ passed, failed, skipped, errors, total, duration, label });
    } catch (e) {
      console.warn('[nightwatch-hook] Error:', e.message);
    }
    done();
  }
};
