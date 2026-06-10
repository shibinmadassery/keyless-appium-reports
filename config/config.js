const { remote }              = require('webdriverio');
const { execSync }            = require('child_process');
const welcomeScreenUtlis      = require('../utlis/welcomeScreenUtlis');

function getDeviceUdid() {
  try {
    const output = execSync('adb devices').toString();
    const lines  = output.split('\n');

    for (const line of lines) {
      // Match f64e330e in any form — USB, wireless, or tls-connect
      if (line.includes('f64e330e') && line.includes('device')) {
        const udid = line.split('\t')[0].trim();
        console.log(`[Config] Found device: ${udid}`);
        return udid;
      }
    }

    console.warn('[Config] f64e330e not found — falling back to 192.168.0.140:37289');
    return '192.168.0.140:37289';
  } catch(e) {
    console.warn('[Config] adb error — falling back:', e.message);
    return '192.168.0.140:37289';
  }
}

async function configAppiumTest() {
  const udid = getDeviceUdid();

  const capabilities = {
    platformName:                  'Android',
    'appium:automationName':       'UiAutomator2',
    'appium:udid':                 udid,
    'appium:deviceName':           'Oppo',
    'appium:appPackage':           'com.keyless_dubai',
    'appium:appActivity':          'com.app.keyless.home.DashboardActivity',
    'appium:appWaitActivity':      'com.app.keyless.*',
    'appium:appWaitDuration':      20000,
    'appium:autoGrantPermissions': true,
    'appium:noReset':              true,
    'appium:fullReset':            false,
  };

  const wdOpts = {
    hostname:               process.env.APPIUM_HOST || 'localhost',
    port:                   parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel:               'error',
    capabilities,
    connectionRetryTimeout: 120000,
    connectionRetryCount:   3,
  };

  const driver = await remote(wdOpts);
  try {
    await welcomeScreenUtlis.verifyLoginButton(driver);
    return driver;
  } catch (error) {
    console.error('Error in Config Appium test:', error);
    throw error;
  }
}

module.exports = configAppiumTest;