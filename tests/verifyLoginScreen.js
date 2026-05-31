const configAppiumEmulatorTest = require('../config/configEmulator');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis');
const loginScreenUtlis = require('../utlis/loginScreenUtlis');

async function verifyLoginScreenTest() {
  let driver;
  try {
    driver = await configAppiumEmulatorTest();
    await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
    await loginScreenUtlis.verifyKeylessIcon(driver);
    await loginScreenUtlis.verifyBackButton(driver);
    await loginScreenUtlis.verifheadingText(driver);
    await loginScreenUtlis.verifyusernameandpasswordText(driver);
    await loginScreenUtlis.verifypassowdText(driver);
    await loginScreenUtlis.verifyforgotpasswordtext(driver);
    await loginScreenUtlis.verifyloginButton(driver);
    await loginScreenUtlis.verifyshowpasswordeyeIcon(driver);
    console.log('Test Passed ✅');

  } catch (error) {
    console.error('Error in verify login screen test:', error);
  } finally {
    // Close the driver session
    if (driver) {
      await driver.deleteSession();

    }
  }
}
module.exports = verifyLoginScreenTest();