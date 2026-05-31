const { assert } = require('nightwatch');
const configAppiumEmulatorTest = require('../../config/configEmulator');
const welcomeScreenUtlis = require('../../utlis/welcomeScreenUtlis')
const loginScreeUtlis = require('../../utlis/loginScreenUtlis')
const dashboardpmUtlis = require('../../utlis/dashboardpmUtlis')

describe('Login As PM', () => {
  it('Should login as property manager', async () => {
    let driver;
    try {
      // Start the Appium session
      driver = await configAppiumEmulatorTest();
      await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
      await loginScreeUtlis.inputUserName(driver);
      await loginScreeUtlis.inputPassword(driver);
      await loginScreeUtlis.clickloginButton(driver);
      await dashboardpmUtlis.verifyhomeTitle(driver);
      console.log('---Logged in as PM---');
      testCompleted = true;

    } catch (error) {
      // Log and handle error

      console.error('Error in Login as PM Test', error);
    } finally {
      // Close the driver session
      if (driver) {
        await driver.deleteSession();
        assert.equal(testCompleted, true, 'Test should complete fully');
      }
    }
  });
});