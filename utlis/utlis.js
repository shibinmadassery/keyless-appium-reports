const keylessSelectors = {
    loginButton: 'id:com.keyless_dubai:id/loginTxt',
    usernameemailTextbox: 'id:com.keyless_dubai:id/tvUserName',
    passwordTextbox: 'id:com.keyless_dubai:id/tvPassword',
    loginButtonToAccount: 'id:com.keyless_dubai:id/btnSignUp',
    notificationIcon: 'id:com.keyless_dubai:id/notificationIcon',
    kelessIconWelcomeScreen: 'android.widget.ImageView',
    backbutton: 'id:com.keyless_dubai:id/backButton',
};

const keylessConstant = {
    usernamePM: 'qatest02',
    password: 'welcome123',
}
async function TestPassed() {
    console.log('Test Passed ✅');
}

async function waitForLoginButton(driver) {
    const loginButton = await driver.$(keylessSelectors.loginButton)
    await loginButton.waitForDisplayed();
}
async function clickLoginButton(driver) {
    const loginButton = await driver.$(keylessSelectors.loginButton)
    await loginButton.click();
}

async function inputUserName(driver) {
    const textbox = await driver.$(keylessSelectors.usernameemailTextbox)
    await textbox.setValue(keylessConstant.usernamePM);
}

async function inputPassword(driver) {
    const textbox = await driver.$(keylessSelectors.passwordTextbox)
    await textbox.setValue(keylessConstant.password);
}

async function clickLoginButtonToAccount(driver) {
    const loginButton = await driver.$(keylessSelectors.loginButtonToAccount)
    await loginButton.click();
}

async function verifyNotificationIcon(driver) {
    const notificationIcon = await driver.$(keylessSelectors.notificationIcon)
    await notificationIcon.waitForDisplayed();
}

async function verifyKeylessIcon(driver) {
    const verifyKeylessIcon = await driver.$(keylessSelectors.kelessIconWelcomeScreen)
    await verifyKeylessIcon.waitForDisplayed();
}

async function verifyHome(driver) {
    const home = await driver.$('id:com.keyless_dubai:id/titlePage')
    await home.waitForDisplayed();
}


module.exports = {
    clickLoginButton,
    waitForLoginButton,
    inputUserName,
    inputPassword,
    clickLoginButtonToAccount,
    verifyNotificationIcon,
    verifyKeylessIcon,
    TestPassed,
    verifyHome,

    // Add more functions as needed

};