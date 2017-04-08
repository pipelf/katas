'use strict'

class Palindromer {

    isPalindromePermutation(str) {
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

    createInitArray(size, initval) {
        var array = new Array(size);

        for (var j = 0; j < array.length; j++) {
            array[j] = initval;
        }

        return array;
    }

    findlengthoflargestPalindrome(input) {
        if (input.length === 0) return 0;

        var countoflargest = 0;

        for (var p = 0; p < input.length; p++) {
            var start,
                end,
                odd = false;

            if (input.charAt(p) === input.charAt(p + 1)) {
                start = p;
                end = p + 1;
            }
            else if ((p - 1) >= 0 && input.charAt(p - 1) === input.charAt(p + 1)) {
                start = p - 1;
                end = p + 1;
                odd = true;
            }
            else {
                continue;
            }

            var currenthalfcount = 0;

            while (input.charAt(start) === input.charAt(end) && start >= 0 && end < input.length) {
                start--;
                end++;

                currenthalfcount++;
            }

            var totalcurrentcount = odd ? (currenthalfcount * 2) + 1 : (currenthalfcount * 2);

            if (totalcurrentcount > countoflargest) {
                countoflargest = totalcurrentcount;
            }
        }

        return countoflargest;
    }

}

module.exports = Palindromer;
