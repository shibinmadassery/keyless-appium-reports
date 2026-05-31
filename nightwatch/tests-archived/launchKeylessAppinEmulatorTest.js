const { assert } = require('nightwatch');
const configAppiumEmulatorTest = require('../../config/configEmulator');

describe('Launch Keyless App in Emulator Test', () => {
  it('Should launch the Keyless app in emulator', async () => {
    let driver;
    try {
      driver = await configAppiumEmulatorTest();

      console.log('---Keyless Launched---');
      testCompleted = true;

    } catch (error) {
      // Log and handle error

      console.error('Error in Launch Keyless Test:', error);
    } finally {
      // Close the driver session
      if (driver) {
        await driver.deleteSession();
        assert.equal(testCompleted, true, 'Test should complete fully');
      }
    }
  });
});