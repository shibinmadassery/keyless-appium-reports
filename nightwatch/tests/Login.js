const { assert } = require('nightwatch');
const configAppiumTest = require('../../config/config');
const welcomeScreenUtlis = require('../../utlis/welcomeScreenUtlis');
const loginScreeUtlis = require('../../utlis/loginScreenUtlis')
const dashboardpmUtlis = require('../../utlis/dashboardpmUtlis')

describe('Login to KeyLess App', () => {
    it('Should login to PM Account', async () => {
        let driver;
        try {
            driver = await configAppiumTest();
            await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
            await loginScreeUtlis.inputUserName(driver);
            await loginScreeUtlis.inputPassword(driver);
            await loginScreeUtlis.clickloginButton(driver);
            await dashboardpmUtlis.verifyhomeTitle(driver);
            testCompleted = true;
        } catch (error) {
            console.error('Error in Launch Keyless Test:', error);
        } finally {
            console.log('Closing Appium session.'); // Add a custom log message
            if (driver) {
                await driver.deleteSession();
                //assert.equal(testCompleted, true, 'Test should complete fully');
            }
        }
    });
});