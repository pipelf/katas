const assert = require('assert');
const TestRunner = require("./TestRunner");
const ZeroMatrix = require('../stringsandarrays/ZeroMatrix');

var testRunner = new TestRunner();
var zeromatrix = new ZeroMatrix();

testRunner.runTest('Zeros Row and Coloum', () => {
    var matrix = [
        [1, 2, 3],
        [4, 0, 6],
        [3, 6, 7],
        [9, 2, 1]
    ];

    var zerod = zeromatrix.zero(matrix);

    var expected = [
        [1, 0, 3],
        [0, 0, 0],
        [3, 0, 7],
        [9, 0, 1]
    ];

    assert.deepEqual(zerod, expected);
});
