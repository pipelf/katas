'use strict';

class SimpleCompressor {
    
    compress(inputstr) {
        let output = '';
        let count = 1;
        
        for(let i = 0; i < inputstr.length; i++) {
            if((inputstr[i] !== inputstr[i + 1]) || inputstr.length === i + 1) {
                output += inputstr[i] + count;
                count = 1;
            }
            else{
                count++;
            }
        }
        
        return output.length > inputstr.length ? inputstr : output;
    }
}

module.exports = SimpleCompressor;
