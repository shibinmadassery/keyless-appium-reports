const configAppiumEmulatorTest = require('../config/configEmulator');
async function launchKeylessAppinEmulator() {
    let driver;
    try {
        driver = await configAppiumEmulatorTest();
        console.log('---KeyLess Launched---');
      }catch(error) {
        console.error('Error in Launch Keyless Test:', error);
      } finally {
        // Close the driver session
        if (driver) {
          await driver.deleteSession();
        }
      }
    }
module.exports = launchKeylessAppinEmulator();