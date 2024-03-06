//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num) {
    // Base case: if the number is 0, return 0
    if (num === 0) {
        return 0;
    }

    // Recursive case: add the current number to the sum of the numbers from 0 to (num - 1)
    return num + recursiveRange(num - 1);
}

// Example usage:
const result = recursiveRange(5); // This will return 0 + 1 + 2 + 3 + 4 + 5 = 15
console.log(result);
