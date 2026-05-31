const configAppiumTest = require('../config/config');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis');

async function launchKeylessAppTest() {
    let driver;
    try {
        driver = await configAppiumTest();
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
module.exports = launchKeylessAppTest();