// test.js

// Import the assert module from Node.js standard library
const assert = require('assert');

// Describe a test suite using the describe function
describe('Array', function() {
  // Describe a test case using the it function
  it('should return -1 when the value is not present', function() {
    // Test assertion using assert module
    assert.equal([1, 2, 3].indexOf(4), -1);
  });
  
  it('should return the index when the value is present', function() {
    // Test assertion using assert module
    assert.equal([1, 2, 3].indexOf(2), 1);
  });
});
