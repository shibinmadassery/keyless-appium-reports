const { assert } = require('nightwatch');
const configAppiumTest = require('../../config/config');
const welcomeScreenUtlis = require('../../utlis/welcomeScreenUtlis');
const { verifyKeylessIcon } = require('../../utlis/loginScreenUtlis');


describe('Launch Keyless App in Real Device', () => {
    let driver;
    let setupError = null;

    before(async () => {
        try {
            driver = await configAppiumTest();
            console.log('---KeyLess Launched---');
        } catch (error) {
            setupError = error;
            console.error('Setup failed (device may not be connected):', error.message);
        }
    });

    after(async () => {
        if (driver) {
            await driver.terminateApp('com.keyless_dubai');
            console.log('Closing Appium session.');
            await driver.deleteSession();
        }
    });

    it('Should launch the Keyless app in POCO', async () => {
        if (setupError) assert.fail(`Device setup failed — device may not be connected: ${setupError.message}`);

        await welcomeScreenUtlis.verifyKeylessIcon(driver);
        const keylessIcon = await driver.$('android.widget.ImageView');
        assert.equal(await keylessIcon.isDisplayed(), true, 'Keyless icon is visible on the welcome screen');

        const title = await driver.$('id:com.keyless_dubai:id/onboardTitle');
        assert.equal(await title.isDisplayed(), true, 'Welcome screen title is displayed');

        await welcomeScreenUtlis.verifyLoginButton(driver);
        const loginBtn = await driver.$('id:com.keyless_dubai:id/loginTxt');
        assert.equal(await loginBtn.isDisplayed(), true, 'Login button is visible on the welcome screen');
        //assert.equal(true, false, 'Intentional failure: this step is expected to fail');
    });
});
