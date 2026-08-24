const { assert }          = require('nightwatch');
const webConfig           = require('../../config/webConfig');
const webLoginScreenUtlis = require('../../utlis/webloginPage');

describe('Keyless Web - Login Page', () => {

    before(async (browser) => {
        await browser.navigateTo(webConfig.baseUrl);
    });

    after(async (browser) => {
        await browser.end();
    });

    it('Should load the login page', async (browser) => {
        const title = await browser.getTitle();
        assert.ok(title.length > 0, 'Page title should not be empty');
    });

    it('Should display the Keyless logo', async (browser) => {
        const displayed = await browser.isVisible(webLoginScreenUtlis.selectors.logo);
        assert.equal(displayed, true, 'Logo should be visible on the page');
    });

    it('Should have the correct logo src', async (browser) => {
        await webLoginScreenUtlis.verifyLogo(browser);
    });

});