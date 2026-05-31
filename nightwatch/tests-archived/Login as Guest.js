const { assert } = require('nightwatch');
const configAppiumEmulatorTest = require('../../config/configEmulator');
const welcomeScreenUtlis = require('../../utlis/welcomeScreenUtlis')
const loginScreenUtlis = require('../../utlis/loginScreenUtlis')
const dashboardguestUtlis = require('../../utlis/dashboardguestUtlis')

describe('Login As Guest', () => {
    it('Should login as guest user', async () => {
        let driver;
        try {
            driver = await configAppiumEmulatorTest();
            await welcomeScreenUtlis.clickLoginButtonToAccount(driver);
            await loginScreenUtlis.inputguestUsername(driver);
            await loginScreenUtlis.inputGuestPassword(driver);
            await loginScreenUtlis.clickloginButton(driver);
            await dashboardguestUtlis.verifyWelcomeHeading(driver);
            console.log('---Logged in as Guest---');
            testCompleted = true;
        } catch (error) {
            console.error('Error in Login as Guest Test', error);
        } finally {
            // Close the driver session
            if (driver) {
                await driver.deleteSession();
                assert.equal(testCompleted, true, 'Test should complete fully');
            }
        }
    });
});