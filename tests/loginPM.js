const configAppiumEmulatorTest = require('../config/configEmulator');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis')
const loginScreeUtlis = require('../utlis/loginScreenUtlis')
const dashboardpmUtlis = require('../utlis/dashboardpmUtlis')

async function loginPmTest() {
    let driver;
    try {
        driver = await configAppiumEmulatorTest();
        await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
        await loginScreeUtlis.inputUserName(driver);
        await loginScreeUtlis.inputPassword(driver);
        await loginScreeUtlis.clickloginButton(driver);
        await dashboardpmUtlis.verifyhomeTitle(driver);
        console.log('Test Passed ✅');
} catch (error) {
    console.error('Error in Login to PM test:', error);
  } finally {
    // Close the driver session
    if (driver) {
      await driver.deleteSession();
    }
  }
}
loginPmTest();