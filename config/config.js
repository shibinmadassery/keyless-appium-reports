const { remote } = require('webdriverio');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis');

async function configAppiumTest() {
  const capabilities = {
    platformName: 'Android',
    'appium:automationName':       'UiAutomator2',
    //'appium:udid': '3576a3d8',   // POCO - USB
    //'appium:udid': 'f64e330e',   // Oppo - USB
    //'appium:udid':                 '192.168.0.140:41481',  // Oppo - Wireless
    'appium:udid': '192.168.0.140:5555',  // Oppo fixed wireless
    'appium:deviceName':           'Oppo',
    'appium:appPackage':           'com.keyless_dubai',
    'appium:appActivity':          'com.app.keyless.home.DashboardActivity',
    'appium:autoGrantPermissions': true,   // boolean not string
    'appium:noReset':              true,   // prevents pm clear error on Android 15
    'appium:fullReset':            false,
  };

  const wdOpts = {
    hostname:     process.env.APPIUM_HOST || 'localhost',
    port:         parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel:     'error',   // reduce noise in output
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