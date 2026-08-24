const { assert } = require('nightwatch');
const welcomeScreenUtlis = require('../../utlis/welcomeScreenUtlis')
const loginScreeUtlis = require('../../utlis/loginScreenUtlis')
const dashboardpmUtlis = require('../../utlis/dashboardpmUtlis');
const configAppiumTest = require('../../config/config');
const lockUtlis = require('../../utlis/lockUtlis')


describe('Login As PM', () => {
  it('Should login as PM, and unlock OJI Lock', async () => {
    let driver;
    try {
      // Start the Appium session
      driver = await configAppiumTest();
      await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
      await loginScreeUtlis.inputUserName(driver);
      await loginScreeUtlis.inputPassword(driver);
      await loginScreeUtlis.clickloginButton(driver);
      // Add wait before verifying home title
       await driver.pause(10000); // Adjust time as needed
      await dashboardpmUtlis.verifyhomeTitle(driver);
      // Scroll to view before clicking OJI Lock without refreshing
      await lockUtlis.scrollToOJILock(driver);
      await lockUtlis.clickOJILock(driver);
      await lockUtlis.verifyDetectingLock(driver);
      await lockUtlis.verifytaptounlockDoor(driver);
      await lockUtlis.unLock(driver);
      await lockUtlis.verifydoorUnlocked(driver);
      await driver.pause(10000); // Adjust time as needed
      await lockUtlis.verifytaptounlockDoor(driver);
      console.log('---"unlocked OJI"---');
      testCompleted = true;
    } catch (error) {
      // Log and handle error
      console.error('Error in Test', error);
    } finally {
      // Close the driver session
      if (driver) {
        await driver.deleteSession();
        assert.equal(testCompleted, true, 'Test should complete fully');
      }
    }
  });
});