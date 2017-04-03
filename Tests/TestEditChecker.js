const assert = require('assert');
const TestRunner = require("./TestRunner");
const CheckEdit = require('../stringsandarrays/EditChecker');

var testRunner = new TestRunner();
var checker = new CheckEdit();

testRunner.runTest('Test remove one Char', () => {
    var inputstr = 'PATO';
    var outstr = 'PAO';
    var result = checker.check(inputstr, outstr);

    assert.equal(result, true, 'This is a remove')
});

testRunner.runTest('Test insert one Char', () => {
    var inputstr = 'PATO';
    var outstr = 'PSATO';
    var result = checker.check(inputstr, outstr);

    assert.equal(result, true, 'This is an insert')
});

testRunner.runTest('Test replace one Char', () => {
    var inputstr = 'PATO';
    var outstr = 'PETO';
    var result = checker.check(inputstr, outstr);

    assert.equal(result, true, 'This is a replace')
});
