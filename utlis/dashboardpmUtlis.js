const assert = require('assert');

const homeScreenSelectors = {
    hometitle : 'id:com.keyless_dubai:id/titlePage',
}

async function verifyhomeTitle(driver) {
    const home = await driver.$(homeScreenSelectors.hometitle)
    await home.waitForDisplayed({ timeout: 12000 }); // Waits up to 10 seconds
}

module.exports = {
    verifyhomeTitle,
}