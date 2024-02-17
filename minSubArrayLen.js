//write a fucnction which accepts two parameters - an array of positive integers 
//and a positive integer
//this function should return the minimal length of a contiguous subarray 
//of which the sum is greater than or equal to the integer
//passed to the function. If there isn't one, return 0 

function minSubArrayLen(arr, target) {
    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let sum = 0;

    while (start < arr.length) {
        // If the current sum is less than the target, expand the window by moving the end pointer
        if (sum < target && end < arr.length) {
            sum += arr[end];
            end++;
        }
        // If the current sum is greater than or equal to the target, update minLength
        else if (sum >= target) {
            minLength = Math.min(minLength, end - start);
            sum -= arr[start];
            start++;
        }
        // If the current sum is less than the target and we have reached the end of the array, break the loop
        else {
            break;
        }
    }

    // If minLength is still Infinity, no subarray found, return 0
    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // Output: 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // Output: 5
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // Output: 0

