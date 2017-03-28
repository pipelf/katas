//Link list implementation
var QueueNode = require('./QueueNode');

function Queue() {
    this.first = null;
    this.last = null;
};

Queue.prototype.add = function(data) {
    var newnode = new QueueNode(data);

    if (this.first === null && this.last === null) {

        this.last = newnode;
        this.first = newnode;
        return;
    }
    
    if(this.first === this.last) {
        this.first.next = newnode;
    }
    else{
        this.last.next = newnode;
    }
    
    this.last = newnode;

};

Queue.prototype.remove = function() {
    if (this.isEmpty()) {
        console.log('queue is empty');
        return;
    }

    var toremove = this.first;
    
    if(this.first === this.last) {
        this.first = null;
        this.last = null;
    }
    else {
        this.first = this.first.next;
    }
    
    return toremove.data;
};

Queue.prototype.peek = function() {
    if (this.isEmpty()) {
        console.log('queue is empty');
        return;
    }

    return this.first.data;
};

Queue.prototype.isEmpty = function() {
    return this.first === null && this.last === null;
};

module.exports = Queue;