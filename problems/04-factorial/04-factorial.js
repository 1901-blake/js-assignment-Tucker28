/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

let array = [];

function factorial(sumNum) {
    // let array = [];
    if (sumNum % 1 !== 0) {                                                                         // error catching in case number passed in is not an integer
        console.log(`Factorial's only work on integers.  Please enter an integer and try again.`);
    } else if (sumNum > 0) {                                                                        // if integer, push it to the array and then recursively call function
        array.push(sumNum);
        sumNum--;
        factorial(sumNum);
    } else {                                                                                        // once array is complete, generates factorial
        let sumFactorial = 1;
        // console.log(array);
        for (i in array) {
            sumFactorial = sumFactorial * array[i];
        }
        console.log(`The Factorial of ${array[0]} is ${sumFactorial}`);
    }
}

factorial(10);