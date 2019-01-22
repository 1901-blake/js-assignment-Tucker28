/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    someStr = someStr.toString();                   // converts to string so that it can handle numbers
    someStr = someStr.toLowerCase();                // converts to lower case to guard against things like R !== r
    let array = someStr.split("");                  // splits strings by character and inserting into array
    let revArray = array.slice(0);                  // generates new array
    revArray.reverse();                             // reverses new array

    arrayStr = '';                                  // generates string from original array
    for (i in array) {
        arrayStr = arrayStr + array[i];
    }

    revArrayStr = '';                               // generates string from reverse array
    for (i in revArray) {
        revArrayStr = revArrayStr + revArray[i];
    }

    if (arrayStr === revArrayStr) {                 // compare both arrays
        console.log(true);
    } else {
        console.log(false);
    }
}

isPalindrome('Racecar');