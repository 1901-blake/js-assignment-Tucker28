/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (i in someObj) {
        console.log(i + ': ' + someObj[i]);
    }
}

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

let player = new NYMets('David Wright', 36, 5, '3B', 'right', 0.341, 45, 0.734, 29, true);
objectProperties(player);