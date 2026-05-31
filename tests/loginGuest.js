const configAppiumEmulatorTest = require('../config/configEmulator');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis');
const loginScreenUtlis = require('../utlis/loginScreenUtlis');
const dashboardguestUtlis = require('../utlis/dashboardguestUtlis');

async function loginGuestTest() {
  let driver;
  try {
    driver = await configAppiumEmulatorTest();
    await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
    await loginScreenUtlis.inputguestUsername(driver);
    await loginScreenUtlis.inputPassword(driver);
    await loginScreenUtlis.clickloginButton(driver);
    await dashboardguestUtlis.verifyWelcomeHeading(driver);
    console.log('Test Passed ✅');
  } catch (error) {
    console.error('Error in Login to Guest test:', error);
  } finally {
    // Close the driver session
    if (driver) {
      await driver.deleteSession();
    }
  }
}
loginGuestTest();