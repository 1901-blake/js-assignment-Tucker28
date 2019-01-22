/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let newString = '';

/**
 * Split string with delimiter of an empty string to break
 * it at every character and then feed it into the new array.
 * Reverse array.  Then use ForIn loop to reassemble string.
 */
    let array = someStr.split("");                
    array.reverse();
    for (const i in array) {
        newString = newString + array[i];
    }
    console.log(newString);
}

reverseStr('This is my string that I need reversed');