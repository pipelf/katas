//Given n lockers and n student print open lockers after students toggle the lockers
//1sr std toggles all
//2nd std toggles 2nd, 4th, 6th
//3rd std toggles 3rd, 6th, 9th
'use strict';

class Locker {
    constructor() {
        this.open = false;    
    }
    
    toggle() {
        if(this.open) {
             this.open = false;
        }
        else{
            this.open = true;
        }
    }
}

class LockerRoom {
    constructor(numlockers) {
        this.lockers = [];
        this.numlockers = numlockers;
        
        for(var i = 0; i < this.numlockers; i++) {
            this.lockers.push(new Locker());
        }
    }
    
    studentTurn(studentnum) {
        for(var i=0; i< this.numlockers; i++) {
            if(i % studentnum === 0){
                this.lockers[i].toggle();
            }
        }
    }
    
    printOpenLockers() {
        for(var i=0; i< this.numlockers; i++) {
            if(this.lockers[i].open) {
                console.log(`Locker # : ${(i + 1)}`);
            }
        }
    }
}

var n = 10;
var lockerRoom = new LockerRoom(n);

for(var std = 0; std < n; std++) {
    lockerRoom.studentTurn(std + 1);
}
lockerRoom.printOpenLockers();