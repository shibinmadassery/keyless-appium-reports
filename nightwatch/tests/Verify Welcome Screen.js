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
            await driver.terminateApp('com.keyless_dubai');
            console.log('Closing Appium session.');
            await driver.deleteSession();
        }
    });

    it('Should display onboarding title "Access"', async () => {
    const title = await driver.$('id:com.keyless_dubai:id/onboardTitle');
    assert.equal(await title.isDisplayed(), true, 'Title should be visible');
    assert.equal(await title.getText(), 'Access', 'Title should read "Access"');
});

it('Should display subtitle "All your locks from one app."', async () => {
    const subtitle = await driver.$('id:com.keyless_dubai:id/onboardSubTitle');
    assert.equal(await subtitle.isDisplayed(), true, 'Subtitle should be visible');
    assert.equal(await subtitle.getText(), 'All your locks from one app.', 'Subtitle text mismatch');
});

it('Should display Login button', async () => {
    const loginBtn = await driver.$('id:com.keyless_dubai:id/loginTxt');
    assert.equal(await loginBtn.isDisplayed(), true, 'Login button should be visible');
    assert.equal(await loginBtn.getText(), 'Login', 'Login button text mismatch');
    assert.equal(await loginBtn.getAttribute('clickable'), 'true', 'Login button should be clickable');
});

it('Should display Signup link', async () => {
    const signupBtn = await driver.$('id:com.keyless_dubai:id/onboardSignBtn');
    assert.equal(await signupBtn.isDisplayed(), true, 'Signup link should be visible');
    assert.equal(await signupBtn.getText(), 'Not yet registered? Signup.', 'Signup text mismatch');
    assert.equal(await signupBtn.getAttribute('clickable'), 'true', 'Signup should be clickable');
});

it('Should display tab indicator', async () => {
    const tabs = await driver.$('id:com.keyless_dubai:id/tabIndicator');
    assert.equal(await tabs.isDisplayed(), true, 'Tab indicator should be visible');
});
});