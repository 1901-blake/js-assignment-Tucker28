/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < numArray.length; i++) {
            if (numArray[i] > numArray[i+1]) {
                let temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
                sorted = false;
            }
        }
    }
console.log(numArray);
}

bubbleSort([43,67,1,0,5,2,8,90,62,42,23,17]);