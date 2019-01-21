/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    someStr = someStr.toString();
    someStr = someStr.toLowerCase();
    let array = someStr.split("");
    let revArray = array.slice(0);
    revArray.reverse();

    arrayStr = '';
    for (i in array) {
        arrayStr = arrayStr + array[i];
    }

    revArrayStr = '';
    for (i in revArray) {
        revArrayStr = revArrayStr + revArray[i];
    }

    if (arrayStr === revArrayStr) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isPalindrome('Racecar');