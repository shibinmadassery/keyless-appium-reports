const configAppiumTest = require('../config/config');
const welcomeScreenUtlis = require('../utlis/welcomeScreenUtlis')
const loginScreeUtlis = require('../utlis/loginScreenUtlis')
const dashboardpmUtlis = require('../utlis/dashboardpmUtlis')
const lockUtlis = require('../utlis/lockUtlis')

async function unlockTest() {
    let driver;
    try {
        driver = await configAppiumTest();
        await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
        await loginScreeUtlis.inputUserName(driver);
        await loginScreeUtlis.inputPassword(driver);
        await loginScreeUtlis.clickloginButton(driver);
        await dashboardpmUtlis.verifyhomeTitle(driver);

        await lockUtlis.clickISEOLock(driver);
        await lockUtlis.verifyDetectingLock(driver);
        await lockUtlis.verifytaptounlockDoor(driver);
        await lockUtlis.unLock(driver);
        await lockUtlis.verifydoorUnlocked(driver);
        
    console.log('ISEO LOCK unlocked ✅');
    await driver.pause(10000);
  } catch (error) {
    console.error('Error in unlock test:', error);
  } finally {
    // Close the driver session
    if (driver) {
      await driver.deleteSession();
    }
  }
}
unlockTest();