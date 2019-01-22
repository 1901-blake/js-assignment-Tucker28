/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let sorted = false;                                 // set sorted to false for the while loop
    while (!sorted) {                                   // runs as long as sorted is false
        sorted = true;                                  // sets sorted to true in case the following if statement is never triggered
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] > numArray[i+1]) {          // if two elements aren't in the right order, swap them
                let temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                sorted = false;                         // set sorted to false since this statement was triggered
            }
        }
    }
console.log(numArray);
}

bubbleSort([43,67,1,0,5,2,8,90,62,42,23,17]);