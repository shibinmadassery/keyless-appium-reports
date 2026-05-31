const assert = require('assert');
const lockSelectors = {
    detectinglock: 'id:com.keyless_dubai:id/txtConnecting',
    taptounlockdoor: 'id:com.keyless_dubai:id/tvUnlock',
    clrippleunlock: 'id:com.keyless_dubai:id/clRipple',
    shareaccess: '//android.widget.TextView[@resource-id="com.keyless_dubai:id/tv_more_info" and @text="Share Access"]',
    addaccessbutton: 'id:com.keyless_dubai:id/ivAddAccess',
    inputshareaccessemail: 'id:com.keyless_dubai:id/etEmail',
    searchguestbutton: 'id:com.keyless_dubai:id/searchBtn',
}

const keylessLocks = {
    ISEOLock: '//android.widget.TextView[@resource-id="com.keyless_dubai:id/txtLockName" and @text="ISEO"]',
    OJILock: '//android.widget.TextView[@resource-id="com.keyless_dubai:id/txtLockName" and @text="Oji f149"]',
    RayonicsLock: '//android.widget.TextView[@resource-id="com.keyless_dubai:id/txtLockName" and @text="Rayonics 2ce9"]',
    MstLock: '//android.widget.TextView[@resource-id="com.keyless_dubai:id/txtLockName" and @text="MST wAAh"]',
}

async function scrollToMstLock(driver) {
    await driver.$(keylessLocks.MstLock);
    await driver.execute('mobile: scrollGesture', {
      left: 100, 
      top: 100, 
      width: 300, 
      height: 600, 
      direction: 'down', 
      percent: 3.0
    });
  }

async function scrollToOJILock(driver) {
  await driver.$(keylessLocks.OJILock);
  await driver.execute('mobile: scrollGesture', {
    left: 100, 
    top: 100, 
    width: 300, 
    height: 600, 
    direction: 'down', 
    percent: 3.0
  });
}
async function scrollToRayonicsLock(driver) {
    await driver.$(keylessLocks.RayonicsLock);
    await driver.execute('mobile: scrollGesture', {
      left: 100, 
      top: 100, 
      width: 300, 
      height: 600, 
      direction: 'down', 
      percent: 3.0
    });
}

async function scrolltoISEOLock(driver) {
    await driver.$(keylessLocks.ISEOLock);
    await driver.execute('mobile: scrollGesture', {
      left: 100, 
      top: 100, 
      width: 300, 
      height: 600, 
      direction: 'down', 
      percent: 3.0
    });
  }

async function clickMstLock(driver) {
    const ojilock = await driver.$(keylessLocks.MstLock)
    await ojilock.click();
}

async function clickOJILock(driver) {
    const ojilock = await driver.$(keylessLocks.OJILock)
    await ojilock.click();
}

async function  clickRayonicsLock(driver) {
    const rayonicslock = await driver.$(keylessLocks.RayonicsLock)
    await rayonicslock.click();
    
}

async function clickISEOLock(driver) {
    const iseolock = await driver.$(keylessLocks.ISEOLock)
    await iseolock.click();
}

async function verifyDetectingLock(driver) {
    await driver.$(lockSelectors.detectinglock).isDisplayed();
    const actualText = await driver.$(lockSelectors.detectinglock).getText();
    const expectedText = 'Detecting Lock';
    assert.strictEqual(actualText, expectedText, 'Detecting Lock not working');
}

async function verifytaptounlockDoor(driver) {
    await driver.$(lockSelectors.taptounlockdoor).waitForDisplayed();
    const actualText = await driver.$(lockSelectors.taptounlockdoor).getText();
    const expectedText = 'Tap to Unlock Door';
    assert.strictEqual(actualText, expectedText, 'Tap to unlock door is not displayed');
}

async function unLock(driver) {
    await driver.$(lockSelectors.clrippleunlock).click();
}

async function verifydoorUnlocked(driver) {
    const textToWaitFor = 'Door Unlocked';
    //Wait for the specific text to be displayed in the page source
    await driver.waitUntil(
        async () => {
            try {
                const pageSource = await driver.getPageSource();
                return pageSource.includes(textToWaitFor);
            } catch (error) {
                return false;
            }
        },
        {
            timeout: 10000, // Adjust the timeout as needed (in milliseconds)
            timeoutMsg: `Text '${textToWaitFor}' not found within the specified timeout after clicking`,
        }
    );
    console.log(`Text '${textToWaitFor}' is displayed.`);
}

async function clickonshareAccess(driver){
    await driver.$(lockSelectors.shareaccess).click();
}

async function clickaddaccessButton(driver) {
    await driver.$(lockSelectors.addaccessbutton).click();
}

async function inputshareaccessemailGuest(driver) {
    const email = await driver.$(lockSelectors.inputshareaccessemail)
    await email.setValue('shibinguest03@mailinator.com')
}

async function clicksearchguestButton(driver) {
    await driver.$(lockSelectors.searchguestbutton).click();
}

module.exports = {
    clickOJILock,
    clickISEOLock,
    verifyDetectingLock,
    verifytaptounlockDoor,
    unLock,
    verifydoorUnlocked,
    clickonshareAccess,
    clickaddaccessButton,
    inputshareaccessemailGuest,
    clicksearchguestButton,
    scrollToOJILock,
    scrollToRayonicsLock,
    clickRayonicsLock,
    scrolltoISEOLock,
    scrollToMstLock,
    clickMstLock,
}