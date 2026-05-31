const configSause = require('../config/configSause');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis');

async function launchKeylessAppSauseTest() {
    let driver;
    try {
        driver = await configSause();
        await welcomeScreenUtlis.verifyKeylessIcon(driver);
        console.log('---KeyLess Launched---');
      }catch(error) {
        console.error('Error in Launch Keyless Test:', error);
      } finally {
        console.log('Closing Appium session.'); // Add a custom log message
        if (driver) {
          await driver.deleteSession();
        }
      }
    }
module.exports = launchKeylessAppSauseTest();