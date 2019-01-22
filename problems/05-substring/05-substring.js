/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    /**
     * First section is logic to ensure input is correct
     */
    if (startIndex % 1 !== 0 | endIndex % 1 !== 0) {
        console.log(`At least one index entered is not an integer.  Please check parameters and try again.`)
    } else if (someStr.length < endIndex) {
        console.log(`The end index entered is greater than the string length.  Please check parameters and try again.`);
    } else if (startIndex < 0) {
        console.log(`The start index cannot be a negative integer.  Please check parameters and try again.`);
    } else if (typeof someStr !== 'string') {
        console.log(`This is not a string.  Please check parameters and try again.`)        
    } else {
        /**
         * Next split string into seperate characters and assign to array.
         */
        let newString = '';
        let array = someStr.split("");
    
        for (let i = array.length; i > endIndex; i--) {     // remove elements at end if needed
            array.pop();
        }
    
        for (let i = 0; i < startIndex; i++) {              // remove elements at start if needed
            array.shift();
        }
    
        for (i in array) {
            newString = newString + array[i];               // reconstruct remaining characters into new string
        }

        console.log(newString);
    }

}

substring('This is my test string', 3, 17);