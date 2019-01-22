/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the someArr.
*/
function spliceElement(someArr, index) {
    let arrLength = someArr.length              // set new variable for array length for the for loop below
    let tempArr = someArr.slice(0);             // Copy array

    for (let i = 0; i < index + 1; i++) {       // Delete elenents before and including index in first array
        someArr.shift();
    }
    for (let i = index; i < arrLength; i++) {   // Delete elements after index in second array
        tempArr.pop();
    }
    someArr = tempArr.concat(someArr);          // join both arrays
    console.log(someArr);
}

let someArr = [0,1,2,3,4,5,6,7,8,9];
spliceElement(someArr, 4);
