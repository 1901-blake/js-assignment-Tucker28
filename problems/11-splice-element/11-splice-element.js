/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the someArr.
*/
function spliceElement(someArr, index) {
    let arrLength = someArr.length
    let tempArr = someArr.slice(0);

    for (let i = 0; i < index + 1; i++) {
        someArr.shift();
    }
    for (let i = index; i < arrLength; i++) {
        tempArr.pop();
    }
    someArr = tempArr.concat(someArr);
    console.log(someArr);
}

let someArr = [0,1,2,3,4,5,6,7,8,9];
spliceElement(someArr, 4);
