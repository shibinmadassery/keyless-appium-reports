const assert = require('assert');

const homeScreenSelectors = {
    welcomemessage : 'id:com.keyless_dubai:id/txtHeading',
}

async function verifyWelcomeHeading(driver) {
    const verifywelacomeHeading = await driver.$(homeScreenSelectors.welcomemessage)
    await verifywelacomeHeading.waitForDisplayed();
}

async function verifywelcometokeylessheadinText(driver) {
    const actualText = await driver.$(homeScreenSelectors.welcomemessage).getText();
    const expectedText = 'Welcome to Keyless';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

module.exports = {
    verifyWelcomeHeading,
    verifywelcometokeylessheadinText,
}