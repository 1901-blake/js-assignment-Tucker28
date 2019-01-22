/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let player = {
    name: 'David Wright',
    age: 36,
    uniformNumber: 5,
    position: '3B',
    bats: 'right',
    avg: 0.341,
    rbi: 45,
    slg: 0.734,
    hr: 29,
    disabled: true
}

console.log('\n Object Literal');
console.log(player);

function mets (name, age, uniformNumber, position, bats, avg, rbi, slg, hr, disabled) {
    this.name = name;
    this.age = age;
    this.uniformNumber = uniformNumber;
    this.position = position;
    this.bats = bats;
    this.avg = avg;
    this.rbi = rbi;
    this.slg = slg;
    this.hr = hr;
    this.disabled = disabled;
}

let myMet = new mets('David Wright', 36, 5, '3B', 'right', 0.341, 45, 0.734, 29, true);
console.log('\n Function Constructor');
console.log(myMet);

class NYMets {
    constructor (name, age, uniformNumber, position, bats, avg, rbi, slg, hr, disabled) {
        this.name = name;
        this.age = age;
        this.uniformNumber = uniformNumber;
        this.position = position;
        this.bats = bats;
        this.avg = avg;
        this.rbi = rbi;
        this.slg = slg;
        this.hr = hr;
        this.disabled = disabled;
    }
}
 
let myNYMet = new NYMets('David Wright', 36, 5, '3B', 'right', 0.341, 45, 0.734, 29, true);
console.log('\n ES6 Class Constructor');
console.log(myNYMet);