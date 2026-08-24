const selectors = {
  logo: 'img[alt="Logo"]',
};

async function verifyLogo(browser) {
  await browser.isVisible(selectors.logo);
  const src = await browser.getAttribute(selectors.logo, 'src');
  const { assert } = require('nightwatch');
  assert.ok(src.includes('header-logo-new.svg'), `Logo src should contain header-logo-new.svg — got: ${src}`);
}

module.exports = { selectors, verifyLogo };