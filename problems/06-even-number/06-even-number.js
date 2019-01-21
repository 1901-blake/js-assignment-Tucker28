/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    someNum = someNum / 2;
    someNum = someNum.toString();
    let oddEven = someNum.split('.');
    if (oddEven[1]) {
        console.log(false);
    } else {
        console.log(true);
    }

    //console.log(someNum);
    //console.log(oddEven);
}

isEven(7);