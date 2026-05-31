// runTests.js

// Import your test scripts
const launchKeylessAppTest = require('./tests/launchKeyless')
const loginPmTest = require ('./tests/loginPM.js')
// Execute the tests sequentially
async function runTests() {
  try {
    console.log('Running Keyless App on Physical Device...');
    await launchKeylessAppTest();

    console.log('Running loginPmTest...');
    await loginPmTest();

    console.log('All tests completed successfully.');
  } catch (error) {
    console.error('Error during test execution:', error);
  }
}

// Run the tests
runTests();