const configAppiumTest = require('../config/config');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis')
const loginScreeUtlis = require('../utlis/loginScreenUtlis')
const dashboardpmUtlis = require('../utlis/dashboardpmUtlis')

async function loginTest() {
    let driver;
    try {
        driver = await configAppiumTest();
        await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
        await loginScreeUtlis.inputUserName(driver);
        await loginScreeUtlis.inputPassword(driver);
        await loginScreeUtlis.clickloginButton(driver);
        await dashboardpmUtlis.verifyhomeTitle(driver);
        console.log('Test Passed ✅');
} catch (error) {
    console.error('Error in login test:', error);
  } finally {
    // Close the driver session
    if (driver) {
      await driver.deleteSession();
    }
  }
}
loginTest();