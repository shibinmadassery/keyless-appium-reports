const assert = require('assert');

const welcomescreenSelectors = {
    kelessicon: 'android.widget.ImageView',
    title: 'id:com.keyless_dubai:id/onboardTitle',
    subtilte: 'id:com.keyless_dubai:id/onboardSubTitle',
    signup: 'id:com.keyless_dubai:id/onboardSignBtn',
    loginButton: 'id:com.keyless_dubai:id/loginTxt',

};

async function verifyKeylessIcon(driver) {
    const verifyKeylessIcon = await driver.$(welcomescreenSelectors.kelessicon)
    await verifyKeylessIcon.waitForDisplayed();
}
async function verifyTitle(driver) {
    const actualText = await driver.$(welcomescreenSelectors.title).getText();
    const expectedText = 'Access';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function verifySubtitle(driver) {
    const actualText = await driver.$(welcomescreenSelectors.subtilte).getText();
    const expectedText = 'All your locks from one app.';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function veriftextsignupText(driver) {
    const actualText = await driver.$(welcomescreenSelectors.signup).getText();
    const expectedText = 'Not yet registered? Signup.';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function clickLoginButtonToAccount(driver) {
    const loginButton = await driver.$(welcomescreenSelectors.loginButton)
    await loginButton.click();
}

async function verifyLoginButton(driver) {
    const loginButton = await driver.$(welcomescreenSelectors.loginButton)
    await loginButton.waitForDisplayed({ timeout: 20000 });
}



module.exports = {
    verifyKeylessIcon,
    verifyTitle,
    verifySubtitle,
    veriftextsignupText,
    clickLoginButtonToAccount,
    verifyLoginButton,
}