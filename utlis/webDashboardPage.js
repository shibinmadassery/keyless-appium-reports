const selectors = {
  sidebarLogo:        '.logo--image',
  sidebarLogoLink:     '.logo--image a',
  dashboardNavLink:    'a.s-sidebar__nav-link[href="/dashboard/"]',
  locksNavLink:                'a.s-sidebar__nav-link.lock_link[href="/locks/"]',
  unitsNavLink:                'a.s-sidebar__nav-link.lock_link[href="/units/"]',
  buildingManagementNavLink:   'a.s-sidebar__nav-link.property_link[href="/property-management/"]',
  usersNavLink:                'span.s-sidebar__nav-link.users_link',
  routineNavLink:              'a.s-sidebar__nav-link.routines_link[href="/routines/"]',
  ticketsNavLink:              'a.s-sidebar__nav-link.property_link[href="/tickets/"]',
  checkinNavLink:              'a.s-sidebar__nav-link.property_link[href="/checkins/"]',
  scheduleInstallationNavLink: 'a.s-sidebar__nav-link.property_link[href="/installation/assignments/"]',
  rfidCardsNavLink:            'a.s-sidebar__nav-link[href="/cards/"]',
  settingsNavLink:             { selector: "//*[contains(@class,'s-sidebar__nav-link') and contains(translate(string(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'settings')]", locateStrategy: 'xpath' },
  transactionsNavLink:         'a.s-sidebar__nav-link[href="/transactions/"]',
  shopNavLink:                 'a.s-sidebar__nav-link.shop_link[href^="https://shop.keyless.ae/shop"]',
  supportNavLink:              'a.s-sidebar__nav-link.support_link[href="/support/help-center/"]',
};

async function verifySidebarLogo(browser) {
  const { assert } = require('nightwatch');
  await browser.waitForElementVisible(selectors.sidebarLogo, 8000);
  const displayed = await browser.isVisible(selectors.sidebarLogo);
  assert.ok(displayed, 'Sidebar logo image should be visible on the dashboard');

  const href = await browser.getAttribute(selectors.sidebarLogoLink, 'href');
  assert.ok(href, `Sidebar logo link should have an href — got: ${href}`);
}

async function verifyDashboardNavLink(browser) {
  const { assert } = require('nightwatch');
  await browser.waitForElementVisible(selectors.dashboardNavLink, 8000);
  const displayed = await browser.isVisible(selectors.dashboardNavLink);
  assert.ok(displayed, 'Dashboard nav link should be visible in the sidebar');

  const text = await browser.getText(selectors.dashboardNavLink);
  assert.ok(
    text.trim().includes('Dashboard'),
    `Dashboard nav link text should include "Dashboard" — got: ${text}`
  );
}

async function verifyNavLink(browser, selector, label, expectedHref) {
  const { assert } = require('nightwatch');
  await browser.waitForElementVisible(selector, 8000);
  const displayed = await browser.isVisible(selector);
  assert.ok(displayed, `${label} nav link should be visible in the sidebar`);

  if (expectedHref) {
    const href = await browser.getAttribute(selector, 'href');
    assert.ok(
      href && href.includes(expectedHref),
      `${label} nav link href should include "${expectedHref}" — got: ${href}`
    );
  }
}

async function verifyLocksNavLink(browser) {
  await verifyNavLink(browser, selectors.locksNavLink, 'Locks', '/locks/');
}

async function verifyUnitsNavLink(browser) {
  await verifyNavLink(browser, selectors.unitsNavLink, 'Units', '/units/');
}

async function verifyBuildingManagementNavLink(browser) {
  await verifyNavLink(browser, selectors.buildingManagementNavLink, 'Building Management', '/property-management/');
}

async function verifyUsersNavLink(browser) {
  await verifyNavLink(browser, selectors.usersNavLink, 'Users');
}

async function verifyRoutineNavLink(browser) {
  await verifyNavLink(browser, selectors.routineNavLink, 'Routine', '/routines/');
}

async function verifyTicketsNavLink(browser) {
  await verifyNavLink(browser, selectors.ticketsNavLink, 'Tickets', '/tickets/');
}

async function verifyCheckinNavLink(browser) {
  await verifyNavLink(browser, selectors.checkinNavLink, 'Check-ins', '/checkins/');
}

async function verifyScheduleInstallationNavLink(browser) {
  await verifyNavLink(browser, selectors.scheduleInstallationNavLink, 'Schedule Installation', '/installation/assignments/');
}

async function verifyRfidCardsNavLink(browser) {
  await verifyNavLink(browser, selectors.rfidCardsNavLink, 'RFID Cards', '/cards/');
}

async function verifySettingsNavLink(browser) {
  await verifyNavLink(browser, selectors.settingsNavLink, 'Settings');
}

async function verifyTransactionsNavLink(browser) {
  await verifyNavLink(browser, selectors.transactionsNavLink, 'Plans and Transactions', '/transactions/');
}

async function verifyShopNavLink(browser) {
  await verifyNavLink(browser, selectors.shopNavLink, 'Shop', 'shop.keyless.ae');
}

async function verifySupportNavLink(browser) {
  await verifyNavLink(browser, selectors.supportNavLink, 'Support', '/support/help-center/');
}

module.exports = {
  selectors,
  verifySidebarLogo,
  verifyDashboardNavLink,
  verifyLocksNavLink,
  verifyUnitsNavLink,
  verifyBuildingManagementNavLink,
  verifyUsersNavLink,
  verifyRoutineNavLink,
  verifyTicketsNavLink,
  verifyCheckinNavLink,
  verifyScheduleInstallationNavLink,
  verifyRfidCardsNavLink,
  verifySettingsNavLink,
  verifyTransactionsNavLink,
  verifyShopNavLink,
  verifySupportNavLink,
};