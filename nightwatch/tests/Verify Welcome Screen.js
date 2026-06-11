const { assert } = require('nightwatch');
const configAppiumTest = require('../../config/config');

describe('Welcome Screen - Element Assertions', () => {
    let driver;

    before(async () => {
        try {
            driver = await configAppiumTest();
            console.log('--- Keyless App Launched ---');
        } catch (error) {
            console.error('Setup failed:', error.message);
        }
    });

    after(async () => {
        if (driver) {
            console.log('Closing Appium session.');
            await driver.deleteSession();
        }
    });

    it('Should display the Keyless logo/icon', async () => {
        const logo = await driver.$('android.widget.ImageView');
        assert.equal(
            await logo.isDisplayed(),
            true,
            'Keyless logo should be visible'
        );
    });

    it('Should display the onboarding title "Access"', async () => {
        const title = await driver.$('id:com.keyless_dubai:id/onboardTitle');
        assert.equal(
            await title.isDisplayed(),
            true,
            'Onboarding title should be visible'
        );
        const text = await title.getText();
        assert.equal(
            text,
            'Access',
            'Title should read "Access"'
        );
    });

    it('Should display the onboarding subtitle', async () => {
        const subtitle = await driver.$('id:com.keyless_dubai:id/onboardSubTitle');
        assert.equal(
            await subtitle.isDisplayed(),
            true,
            'Onboarding subtitle should be visible'
        );
        const text = await subtitle.getText();
        assert.equal(
            text,
            'All your locks from one app.',
            'Subtitle should read "All your locks from one app."'
        );
    });

    it('Should display the tab indicator with 3 dots', async () => {
        const tabIndicator = await driver.$('id:com.keyless_dubai:id/tabIndicator');
        assert.equal(
            await tabIndicator.isDisplayed(),
            true,
            'Tab indicator should be visible'
        );
    });

    it('Should display the Login button', async () => {
        const loginBtn = await driver.$('id:com.keyless_dubai:id/loginTxt');
        assert.equal(
            await loginBtn.isDisplayed(),
            true,
            'Login button should be visible'
        );
        const text = await loginBtn.getText();
        assert.equal(
            text,
            'Login',
            'Login button text should read "Login"'
        );
        const clickable = await loginBtn.getAttribute('clickable');
        assert.equal(
            clickable,
            'true',
            'Login button should be clickable'
        );
    });

    it('Should display the Signup link', async () => {
        const signupBtn = await driver.$('id:com.keyless_dubai:id/onboardSignBtn');
        assert.equal(
            await signupBtn.isDisplayed(),
            true,
            'Signup link should be visible'
        );
        const text = await signupBtn.getText();
        assert.equal(
            text,
            'Not yet registered? Signup.',
            'Signup link text should read "Not yet registered? Signup."'
        );
        const clickable = await signupBtn.getAttribute('clickable');
        assert.equal(
            clickable,
            'true',
            'Signup link should be clickable'
        );
    });

    it('Should display the onboarding video/background', async () => {
        const video = await driver.$('id:com.keyless_dubai:id/onboardVidView');
        assert.equal(
            await video.isDisplayed(),
            true,
            'Onboarding video background should be visible'
        );
    });

    it('Should display the onboarding view pager', async () => {
        const viewPager = await driver.$('id:com.keyless_dubai:id/onboardViewPager');
        assert.equal(
            await viewPager.isDisplayed(),
            true,
            'Onboarding ViewPager should be visible'
        );
    });

});