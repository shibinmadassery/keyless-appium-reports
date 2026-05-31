// nightwatch.config.js

const { remote } = require('webdriverio');

// Function to configure Appium for POCO device
async function configAppiumTest() {
  const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:udid': '3576a3d8', // POCO device UDID
    'appium:deviceName': 'POCO',
    'appium:appPackage': 'com.keyless_dubai',
    'appium:appActivity': 'com.app.keyless.dashboard.DashboardActivity',
    'appium:autoGrantPermissions': 'true',
    'appium:waitForQuiescence': 'true',
    'appium:waitForIdleTimeout': 0,
  };

  const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
  };

  const driver = await remote(wdOpts);

  try {
    // Perform any necessary setup actions here
    return driver;
  } catch (error) {
    console.error('Error in Config Appium test:', error);
    throw error;
  }
}

// Function to configure Appium for emulator
async function configsauseTest() {
  const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:udid': 'emulator-5554', // Emulator UDID
    'appium:deviceName': 'Android Emulator',
    'appium:appPackage': 'com.keyless_dubai',
    'appium:appActivity': 'com.app.keyless.dashboard.DashboardActivity',
    'appium:autoGrantPermissions': 'true',
    'appium:waitForQuiescence': 'false',
  };

  const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
  };

  const driver = await remote(wdOpts);

  try {
    // Perform any necessary setup actions here
    return driver;
  } catch (error) {
    console.error('Error in Config Appium test:', error);
    throw error;
  }
}

module.exports = {
  src_folders: ['nightwatch/tests'],

  page_objects_path: ['nightwatch/page-objects'],

  custom_commands_path: ['nightwatch/custom-commands'],

  custom_assertions_path: ['nightwatch/custom-assertions'],

  plugins: [],

  globals_path: '',

  webdriver: {},

  test_workers: {
    enabled: true,
  },

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },

      desiredCapabilities: {
        browserName: 'chrome',
      },

      webdriver: {
        start_process: true,
        server_path: '',
      },
    },

    'android.appium.poco': {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },

      webdriver: {
        start_process: false,
      },

      wdio_fn: configAppiumTest,
    },

    'android.appium.emulator': {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true,
      },

      webdriver: {
        start_process: false,
      },

      wdio_fn: configsauseTest,
    },
  },

  usage_analytics: {
    enabled: true,
    log_path: './logs/analytics',
    client_id: 'c6e4893b-28d3-47ca-b7d2-13c64ae93a20',
  },
};
