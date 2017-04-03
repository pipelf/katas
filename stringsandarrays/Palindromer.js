//Given a string check if it is a permutation of a palindrome

function Palindromer() {};

Palindromer.prototype.IsPalindromePermutation = function (str) {
    var str = str.replace(' ', '').toLowerCase();
    var hashstrings = this.createInitArray(128, 0);

    //Get count of each string
    for (var i = 0; i < str.length; i++) {
        hashstrings[str.charCodeAt(i)]++;
    }

    var oddcount = 0;
    //Check if counts are multiples of 2 for all but one
    for (var i = 0; i < hashstrings.length; i++) {
        if (oddcount > 1) {
            return false;
        }

        var istwomult = hashstrings[i] % 2 == 0;

        if (!istwomult) {
            oddcount++;
        }
    }

    return oddcount == 0 || oddcount == 1;
}

Palindromer.prototype.createInitArray = function(size, initval) {
    var array = new Array(size);

    //initialize array
    for (var j = 0; j < array.length; j++) {
        array[j] = initval;
    }
    
    return array;
}

module.exports = Palindromer;