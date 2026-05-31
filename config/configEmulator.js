const { remote } = require('webdriverio');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis')

async function configsauseTest() {
  const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:udid': 'emulator-5554',
    'appium:deviceName': 'Android Emulator',
    'appium:appPackage': 'com.keyless_dubai',
    'appium:appActivity': 'com.app.keyless.home.DashboardActivity',
    'appium:autoGrantPermissions': 'true',
    'appium:waitForQuiescence': 'false',
  //   'appium:settings': {
  //     'newCommandTimeout': 120 // Set the timeout value in seconds
  // }
  };

  const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
  };

  const driver = await remote(wdOpts);

  try {
    // Wait for the login button to be visible
    await welcomeScreenUtlis.verifyLoginButton(driver);

    return driver;
  } catch (error) {
    console.error('Error in Config Appium test:', error);
    throw error;
  }
}

module.exports = configsauseTest;