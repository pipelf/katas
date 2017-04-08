const assert = require('assert');
const TestRunner = require("./TestRunner");
const Palindromer = require('../stringsandarrays/Palindromer');

var testRunner = new TestRunner();
var palin = new Palindromer();

testRunner.runTest('TestIsPalindromePermutation_true_for_validstr', () => {
    var str = 'Tact coa';
    var result = palin.isPalindromePermutation(str);

    assert.equal(result, true, 'is Palindrome permutation')
});

testRunner.runTest('TestIsPalindromePermutation_false_for_random', () => {
    var str = 'asdf fjfjd k jkjff';
    var result = palin.isPalindromePermutation(str);

    assert.equal(result, false, 'is Not Palindrome permutation')
});

testRunner.runTest('TestIsPalindromePermutation_true_for_sentence_noodd', () => {
    var str = 'asddsa';
    var result = palin.isPalindromePermutation(str);

    assert.equal(result, true, 'is Palindrome permutation')
});

// "absdfpweraaabcbaa823afhsdft21tacoocat12"
// output: 12
// Pali1: aabcbaa
// Pali2: 21tacoocat12
testRunner.runTest('Find the lenght Longest Palindrome with no odd center', () => {
    var input = "absdfpweraaabcbaa823afhsdft21tacoocat12";
    
    var result = palin.findlengthoflargestPalindrome(input);
    
    assert.equal(result, 12);
});

testRunner.runTest('Find the lenght Longest Palindrome with odd center', () => {
    var input = "absdfpweraaabcbaa823afhsdft21tacoxocat12";
    
    var result = palin.findlengthoflargestPalindrome(input);
    
    assert.equal(result, 13);
});





