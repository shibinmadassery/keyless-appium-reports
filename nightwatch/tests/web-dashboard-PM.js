const webConfig        = require('../../config/webConfig');
const webLoginPage     = require('../../utlis/webloginPage');
const webDashboardPage = require('../../utlis/webDashboardPage');

describe('Keyless Web - Verify Dashboard', () => {

    before(async (browser) => {
        await browser.navigateTo(webConfig.baseUrl);
        await webLoginPage.enterUsername(browser, webConfig.credentials.username);
        await webLoginPage.enterPassword(browser, webConfig.credentials.password);
        await webLoginPage.clickLogin(browser);
        await webLoginPage.verifyWelcomeMessage(browser);
    });

    after(async (browser) => {
        await browser.end();
    });

    it('Should display the left sidebar logo image', async (browser) => {
        await webDashboardPage.verifySidebarLogo(browser);
    });

    it('Should display the left sidebar Dashboard nav link', async (browser) => {
        await webDashboardPage.verifyDashboardNavLink(browser);
    });

    it('Should display the left sidebar Locks nav link', async (browser) => {
        await webDashboardPage.verifyLocksNavLink(browser);
    });

    it('Should display the left sidebar Units nav link', async (browser) => {
        await webDashboardPage.verifyUnitsNavLink(browser);
    });

    it('Should display the left sidebar Building Management nav link', async (browser) => {
        await webDashboardPage.verifyBuildingManagementNavLink(browser);
    });

    it('Should display the left sidebar Users nav link', async (browser) => {
        await webDashboardPage.verifyUsersNavLink(browser);
    });

    it('Should display the left sidebar Routine nav link', async (browser) => {
        await webDashboardPage.verifyRoutineNavLink(browser);
    });

    it('Should display the left sidebar Tickets nav link', async (browser) => {
        await webDashboardPage.verifyTicketsNavLink(browser);
    });

    it('Should display the left sidebar Check-in nav link', async (browser) => {
        await webDashboardPage.verifyCheckinNavLink(browser);
    });

    it('Should display the left sidebar Schedule Installation nav link', async (browser) => {
        await webDashboardPage.verifyScheduleInstallationNavLink(browser);
    });

    it('Should display the left sidebar RFID Cards nav link', async (browser) => {
        await webDashboardPage.verifyRfidCardsNavLink(browser);
    });

    it('Should display the left sidebar Settings nav link', async (browser) => {
        await webDashboardPage.verifySettingsNavLink(browser);
    });

    it('Should display the left sidebar Plans and Transactions nav link', async (browser) => {
        await webDashboardPage.verifyTransactionsNavLink(browser);
    });

    it('Should display the left sidebar Shop nav link', async (browser) => {
        await webDashboardPage.verifyShopNavLink(browser);
    });

    it('Should display the left sidebar Support nav link', async (browser) => {
        await webDashboardPage.verifySupportNavLink(browser);
    });
});