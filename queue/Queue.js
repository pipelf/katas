//Link list implementation
var QueueNode = require('./Queue');

function Queue() {
    this.first = null;
    this.last = null;
    this.size = 0;
}

Queue.prototype.add = function(data) {
    //add to the end
    var newnode = new QueueNode(data);
    
    if(this.last ===  null) {
        
        this.last = newnode;
        this.first = newnode;
        this.size++;
        return;
    }
    
    this.last.next = newnode;
    this.last = newnode;
};

Queue.prototype.remove = function () {
    if(this.isEmpty()) {
        console.log('queue is empty');
    }
    
    var toremove = this.first;
    this.first = this.first.next;
    
    return toremove;
};

Queue.prototype.peek = function () {
     if(this.isEmpty()) {
        console.log('queue is empty');
    }
    
    return this.first;
};

Queue.prototype.isEmpty = function () {
     return this.first === null;
};