const assert = require('assert');
const TestRunner = require("./TestRunner");
const Palindromer = require('../stringsandarrays/Palindromer');

var testRunner = new TestRunner();
var palin = new Palindromer();

testRunner.runTest('TestIsPalindromePermutation_true_for_validstr', () => {
    var str = 'Tact coa';
    var result = palin.IsPalindromePermutation(str);

    assert.equal(result, true, 'is Palindrome permutation')
});

testRunner.runTest('TestIsPalindromePermutation_false_for_random', () => {
    var str = 'asdf fjfjd k jkjff';
    var result = palin.IsPalindromePermutation(str);

    assert.equal(result, false, 'is Not Palindrome permutation')
});

testRunner.runTest('TestIsPalindromePermutation_true_for_sentence_noodd', () => {
    var str = 'asddsa';
    var result = palin.IsPalindromePermutation(str);

    assert.equal(result, true, 'is Palindrome permutation')
});