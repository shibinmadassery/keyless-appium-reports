const selectors = {
  logo:           'img[alt="Logo"]',
  usernameInput:  'input[name="emailUsername"]',
  passwordInput:  'input[name="password"]',
   loginButton:   'button[type="submit"].btn', 
  welcomeHeader:  '.welcome__title h3',
};

async function verifyLogo(browser) {
  const { assert } = require('nightwatch');
  const src = await browser.getAttribute(selectors.logo, 'src');
  assert.ok(
    src.includes('header-logo-new.svg'),
    `Logo src should contain header-logo-new.svg — got: ${src}`
  );
}

async function enterUsername(browser, username) {
  await browser
    .waitForElementVisible(selectors.usernameInput, 5000)
    .setValue(selectors.usernameInput, username);
}

async function enterPassword(browser, password) {
  await browser
    .waitForElementVisible(selectors.passwordInput, 5000)
    .setValue(selectors.passwordInput, password);
}

async function enterCredentials(browser, username, password) {
  await enterUsername(browser, username);
  await enterPassword(browser, password);
}

async function clickLogin(browser) {
  await browser
    .waitForElementVisible(selectors.loginButton, 5000)
    .click(selectors.loginButton);
  await browser.pause(2000);  // ← wait for dashboard to load
}

async function verifyWelcomeMessage(browser) {
  const { assert } = require('nightwatch');
  // Wait for redirect to dashboard
  await browser.waitForElementVisible(selectors.welcomeHeader, 8000);
  const text = await browser.getText(selectors.welcomeHeader);
  assert.equal(text, 'Welcome Manager', `Expected "Welcome Manager" — got: ${text}`);
}

module.exports = {
  selectors,
  verifyLogo,
  enterUsername,
  enterPassword,
  enterCredentials,
  clickLogin,
  verifyWelcomeMessage
};