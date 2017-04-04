function EditChecker() {};

EditChecker.prototype.check = function(inputstr, outstr) {
    //insert
    if (outstr.length === (inputstr.length + 1)) {
        var instack = inputstr.split('');
        var outstack = outstr.split('');
        return this.checkedit(outstack, instack);
    }
    
    //remove
    if(outstr.length === (inputstr.length - 1)) {
        instack = inputstr.split('');
        outstack = outstr.split('');
        return this.checkedit(instack, outstack);
    }
    
    //Replace
    if(outstr.length === inputstr.length) {
        instack = inputstr.split('');
        outstack = outstr.split('');
        return this.checkedit(instack, outstack, true); 
    }
    
    return false;
};

EditChecker.prototype.checkedit = function(instack, outstack, isreplace) {
    var count = 0;

    while (outstack.length > 0) {
        if (count > 1) return false;

        var peekin = instack[instack.length - 1];
        var peekout = outstack[outstack.length - 1];

        if (peekin === peekout) {
            instack.pop();
            outstack.pop();
        }
        else {
            instack.pop();
            if(isreplace) {
                outstack.pop();
            }
            
            count++;
        }
    }

    return count === 1;
};


module.exports = EditChecker;