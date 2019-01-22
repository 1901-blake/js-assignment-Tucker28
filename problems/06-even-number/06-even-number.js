/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    someNum = someNum / 2;                  // divide number by 2
    someNum = someNum.toString();           // convert calculation to string
    let oddEven = someNum.split('.');       // split the integer from the decimal portion and plug into array
    if (oddEven[1]) {                       // if number isn't even, there will be a remainer portion in array[1].  If even, there won't be an array[1]
        console.log(false);
    } else {
        console.log(true);
    }

    //console.log(someNum);
    //console.log(oddEven);
}

isEven(7);