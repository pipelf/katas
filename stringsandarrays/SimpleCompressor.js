'use strict';

class SimpleCompressor {

    compress(inputstr) {
        let outarray = [];
        let count = 1;

        for (let i = 0; i < inputstr.length; i++) {
            if ((inputstr[i] !== inputstr[i + 1]) || inputstr.length === i + 1) {
                outarray.push(inputstr[i]);
                outarray.push(count);
                count = 1;
            }
            else {
                count++;
            }
        }

        return outarray.length > inputstr.length ? inputstr : outarray.join('');
    }
}

module.exports = SimpleCompressor;
