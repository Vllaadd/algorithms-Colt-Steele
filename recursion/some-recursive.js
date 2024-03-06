//Write a recursive function called someRecursive 
//which accepts an array and a callback. 
//The function returns true if a single value in 
//the array returns true when passed to the callback. 
//Otherwise it returns false.

function someRecursive(arr, callback) {
    // Base case: if the array is empty, return false
    if (arr.length === 0) {
        return false;
    }

    // Check if the first element satisfies the callback
    if (callback(arr[0])) {
        return true;
    } else {
        // Recursive case: check the rest of the array
        return someRecursive(arr.slice(1), callback);
    }
}

// Example
const isEven = (num) => num % 2 === 0;

console.log(someRecursive([1, 2, 3, 4], isEven)); // Output: true (because 2 is even)
console.log(someRecursive([1, 3, 5], isEven));    // Output: false (none of them is even)
