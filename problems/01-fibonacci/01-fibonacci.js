/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let arr = [0,1]; //Start Fibonacci array with the first two numbers

    for (let i = 0; i < (n-2); i++) {   //Use for loop to generate Fibonacci Sequence only to the number needed
        let z = arr[i] + arr[i + 1];    //z is the calculated next number in the Fibonacci Sequence                     
        //arr.push(z);                    //Append the newest number onto the array

        //                              Attempt to get rid of variable z
        arr.push(arr[i] + arr[i + 1]); // => {
        //    arr[i] + arr[i + 1];
        //}*/
        }

    /*                                  Attempted logic to insert correct suffix
    if (condition) {
        let suffix = 'st';
    }*/

    console.log(arr);
    //console.log(`The ${n}${suffix} number of the Fibonacci Sequence is ` + arr[n-1]);     //goes with logic for suffix
    console.log(`Number ${n} of the Fibonacci Sequence is ` + arr[n-1]);
    }

fib(16);