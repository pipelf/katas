const assert = require('assert');
const TestRunner = require("./TestRunner");
const ImageRotator = require('../stringsandarrays/ImageRotator');

var testRunner = new TestRunner();
var rotator = new ImageRotator();

testRunner.runTest('Rotate 90 degrees', () => {
    var inputimage = [['1','2','3'],['4','5','6'],['7','8','9']];
    
    var rotated = rotator.rotate90(inputimage);
    
    var expected = [['7','4','1'],['8','5','2'],['9','6','3']];
    assert.deepEqual(rotated, expected);
});