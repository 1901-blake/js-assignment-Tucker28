/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {

    let arr = [0,1]; //Start Fibonacci array with the first two numbers
    let x = 0;        //set x to the first number of the sequence
    let y = 1;       //set y to the second number of the sequence

    for (let i = 0; i < (n-2); i++) {   //Use for loop to generate Fibonacci Sequence only to the number needed
        z = x + y;                      //z is the calculated next number in the Fibonacci Sequence
        arr.push(z);                    //Append the newest number onto the array
        x = y;                          //Set x to the value of y for the next calculation
        y = z;                          //Set y to the value of z for the next calculation
        //console.log(z);                 Used while coding only
        }
    //console.log(arr);                   Used while coding only
    console.log(`Number ${n} of the Fibonacci Sequence is ` + arr[n-1]);
    }


fib(200);