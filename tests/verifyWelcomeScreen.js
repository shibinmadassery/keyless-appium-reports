const configAppiumEmulatorTest = require('../config/configEmulator');
const utlisWelcomeScreen = require('../utlis/welcomeScreenUtlis');


async function welcomeScreenVerify() {
    let driver;
    try {
        driver = await configAppiumEmulatorTest();
        await utlisWelcomeScreen.verifyKeylessIcon(driver);
        await utlisWelcomeScreen.verifyTitle(driver);
        await utlisWelcomeScreen.verifySubtitle(driver);
        await utlisWelcomeScreen.veriftextsignupText(driver);
        await utlisWelcomeScreen.verifyLoginButton(driver);
        console.log('Test Passed ✅');
    } catch (error) {
        console.error('Error in Verify Welcome Screen test:', error);
      } finally {
        // Close the driver session
        if (driver) {
          await driver.deleteSession();
        }
      }
    }
    welcomeScreenVerify();