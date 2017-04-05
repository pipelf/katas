const assert = require('assert');
const TestRunner = require("./TestRunner");
const SimpleCompressor = require('../stringsandarrays/SimpleCompressor');

var testRunner = new TestRunner();
var compressor = new SimpleCompressor();

testRunner.runTest('Test compress with duplicate count', () => {
    var inputstr = 'aacccdwwwww';
    var expected = 'a2c3d1w5';
    var result = compressor.compress(inputstr);

    assert.equal(result, expected);
});

testRunner.runTest('Test compress returns original string is compress is longer', () => {
    var inputstr = 'ab';
    var expected = 'ab';
    var result = compressor.compress(inputstr);

    assert.equal(result, expected);
});

testRunner.runTest('Test compress empty returns empty', () => {
    var inputstr = '';
    var expected = '';
    var result = compressor.compress(inputstr);

    assert.equal(result, expected);
});
