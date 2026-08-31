const { assert }          = require('nightwatch');
const webConfig           = require('../../config/webConfig');
const webLoginPage       = require('../../utlis/webloginPage');

describe('Keyless Web - Login Input', () => {

    before(async (browser) => {
        await browser.navigateTo(webConfig.baseUrl);
    });

    after(async (browser) => {
        await browser.end();
    });

    it('Should enter username in the email/username field', async (browser) => {
        await webLoginPage.enterUsername(browser, webConfig.credentials.username);
    });

    it('Should enter password in the password field', async (browser) => {
        await webLoginPage.enterPassword(browser, webConfig.credentials.password);
    });
     it('Should click the login button', async (browser) => {
        await webLoginPage.clickLogin(browser);
    });

    it('Should display welcome message after login', async (browser) => {
        await webLoginPage.verifyWelcomeMessage(browser);
    });
});