/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let arr = [0,1]; //Start Fibonacci array with the first two numbers

    for (let i = 0; i < (n-2); i++) {   //Use for loop to generate Fibonacci Sequence only to the number needed
    //    let z = arr[i] + arr[i + 1];  //z is the calculated next number in the Fibonacci Sequence. Got rid of variable later.
        arr.push(arr[i] + arr[i + 1]);  //Append the next number onto the array
        }
                    
    n.toString();                       //Logic to insert correct suffix
    let lastDigit = n % 10;
    let last2Digits = n % 100;
    let suffix = '';
    //console.log(lastDigit);
    //console.log(last2Digits);
    if (last2Digits === 11) {
        suffix = 'th';
    } else if (last2Digits === 12) {
        suffix = 'th';
    } else if (last2Digits === 13) {
        suffix = 'th';
    } else if (lastDigit === 1) {
        suffix = 'st';
    } else if (lastDigit === 2) {
        suffix = 'nd';
    } else if (lastDigit === 3) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    //console.log(arr);
    console.log(`The ${n}${suffix} number of the Fibonacci Sequence is ` + arr[n-1]);
    }

fib(12);