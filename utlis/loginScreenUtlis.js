const assert = require('assert');

const loginScreenSelectors = {
    keylessicon: 'android.widget.ImageView',
    backbutton: 'id:com.keyless_dubai:id/backButton',
    headingtext: 'id:com.keyless_dubai:id/textViewHeading',
    usernameandpasswordtext: 'id:com.keyless_dubai:id/textView2',
    inputusernamtextbox: 'id:com.keyless_dubai:id/tvUserName',
    passwordtext: 'id:com.keyless_dubai:id/textView3',
    inputpasswordtextbox: 'id:com.keyless_dubai:id/tvPassword',
    forgotpasswordtext: 'id:com.keyless_dubai:id/forgotPassword',
    showpasswordeye: 'id:com.keyless_dubai:id/showPassBtn',
    loginbutton: 'id:com.keyless_dubai:id/btnSignUp',
};

const keylessConstant = {
    usernameGuest: 'shibinguest',
    usernamePM: 'qatest02',
    userworldprime: 'worldprime',
    passwordworldprime: 'Worldprime#123',
    password: 'welcome123',
};



async function verifyKeylessIcon(driver) {
    const verifyKeylessIcon = await driver.$(loginScreenSelectors.keylessicon)
    await verifyKeylessIcon.waitForDisplayed();
}

async function verifyBackButton(driver) {
    const verifyBackButtonIcon = await driver.$(loginScreenSelectors.backbutton)
    await verifyBackButtonIcon.waitForDisplayed();
}

async function verifheadingText(driver) {
    const actualText = await driver.$(loginScreenSelectors.headingtext).getText();
    const expectedText = 'Login to your Account';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function verifyusernameandpasswordText(driver) {
    const actualText = await driver.$(loginScreenSelectors.usernameandpasswordtext).getText();
    const expectedText = 'Username/Email';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function verifypassowdText(driver) {
    const actualText = await driver.$(loginScreenSelectors.passwordtext).getText();
    const expectedText = 'Password';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function verifypassowdtextBox(driver) {
    const textbox = await driver.$(loginScreenSelectors.inputpasswordtextbox)
    await textbox.waitForDisplayed();
}

async function verifyforgotpasswordtext(driver) {
    const actualText = await driver.$(loginScreenSelectors.forgotpasswordtext).getText();
    const expectedText = 'Forgot Password?';
    assert.strictEqual(actualText, expectedText, 'Text does not match');
}

async function verifyloginButton(driver) {
    const button = await driver.$(loginScreenSelectors.loginbutton)
    await button.waitForDisplayed();
}

async function verifyshowpasswordeyeIcon(driver) {
    const icon = await driver.$(loginScreenSelectors.showpasswordeye)
    await icon.waitForDisplayed();
}

async function inputguestUsername(driver) {
    const username = await driver.$(loginScreenSelectors.inputusernamtextbox)
    await username.setValue(keylessConstant.usernameGuest);
}

async function inputPassword(driver) {
    const password = await driver.$(loginScreenSelectors.inputpasswordtextbox)
    await password.setValue(keylessConstant.password);
}

async function clickloginButton(driver) {
    const loginbutton = await driver.$(loginScreenSelectors.loginbutton)
    await loginbutton.click();
}

async function inputUserName(driver) {
    const textbox = await driver.$(loginScreenSelectors.inputusernamtextbox)
    await textbox.setValue(keylessConstant.userworldprime);
}

async function inputPassword(driver) {
    const textbox = await driver.$(loginScreenSelectors.inputpasswordtextbox)
    await textbox.setValue(keylessConstant.passwordworldprime);
}

async function inputGuestPassword(driver) {
    const textbox = await driver.$(loginScreenSelectors.inputpasswordtextbox)
    await textbox.setValue(keylessConstant.password);
}





module.exports = {
    verifyKeylessIcon,
    verifyBackButton,
    verifheadingText,
    verifyusernameandpasswordText,
    verifypassowdText,
    verifypassowdtextBox,
    verifyforgotpasswordtext,
    verifyloginButton,
    verifyshowpasswordeyeIcon,
    inputguestUsername,inputPassword,
    clickloginButton,
    inputPassword,
    inputUserName,
    inputGuestPassword,
}