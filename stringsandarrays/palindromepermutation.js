//Given a string check if it is a permutation of a palindrome

function IsPalindromePermutation(str) {
    var str = str.replace(' ', '').toLowerCase();
    var hashstrings = new Array(128);

    //initialize array
    for (var j = 0; j < hashstrings.length; j++) {
        hashstrings[j] = 0;
    }

    //Get count of each string
    for (var i = 0; i < str.length; i++) {
        hashstrings[str.charCodeAt(i)]++;
    }

    var notamultoftwocount = 0;
    //Check if counts are multiples of 2 for all but one
    for (var i = 0; i < hashstrings.length; i++) {
        if (notamultoftwocount > 1) {
            return false;
        }

        var istwomult = hashstrings[i] % 2 == 0;

        if (!istwomult) {
            notamultoftwocount++;
        }
    }

    return notamultoftwocount == 0 || notamultoftwocount == 1;
}


function TestIsPalindromePermutation_true_for_validstr() {
    var str = 'Tact coa';
    var result = IsPalindromePermutation(str);

    if (result) {
        console.log('PASS ' + str + ' is Palindrome permutation');
    }
    else {
        console.log('FAIL ' + str + ' is Not Palindrome permutation');
    }
}

TestIsPalindromePermutation_true_for_validstr();

function TestIsPalindromePermutation_false_for_random() {
    var str = 'asdf fjfjd k jkjff';
    var result = IsPalindromePermutation(str);

    if (result) {
        console.log('PASS ' + str + ' is Palindrome permutation');
    }
    else {
        console.log('FAIL ' + str + ' is Not Palindrome permutation');
    }
}

TestIsPalindromePermutation_false_for_random();
