const assert = require('assert');
const Palindromer = require('../stringsandarrays/Palindromer');

var palin = new Palindromer();

runTest('TestIsPalindromePermutation_true_for_validstr', function() {
    var str = 'Tact coa';
    var result = palin.IsPalindromePermutation(str);

    assert.equal(result, true, 'is Palindrome permutation')
});

runTest('TestIsPalindromePermutation_false_for_random', function() {
    var str = 'asdf fjfjd k jkjff';
    var result = palin.IsPalindromePermutation(str);

    assert.equal(result, false, 'is Not Palindrome permutation')
});


runTest('TestIsPalindromePermutation_true_for_sentence_noodd', function() {
    var str = 'asddsa';
    var result = palin.IsPalindromePermutation(str);

    assert.equal(result, true, 'is Palindrome permutation')
});


function runTest(testname, test) {
    try {
        console.log('running test ' + testname);
        test();
        console.log('Test Passed');
    }
    catch(error) {
        console.error("Test Failed");
        console.log(error);
    }
}
