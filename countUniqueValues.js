//implement a function called countUniqueValues, which accepts a sorted
//array, and counts the unique values in the array. There can be negative 
// numbers in the array, but it will always be sorted 

//naive approach
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let uniqueCount = 1; // Initialize with 1 as the first element is always unique

    for (let i = 1; i < arr.length; i++) {
        // Compare current element with the previous one
        if (arr[i] !== arr[i - 1]) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

// refactored 
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let i = 0; // Slow pointer
    for (let j = 1; j < arr.length; j++) {
        // Compare elements at pointers i and j
        if (arr[i] !== arr[j]) {
            // Move slow pointer and update value
            i++;
            arr[i] = arr[j];
        }
    }

    // i represents the last index with a unique value
    // Adding 1 to get the count of unique values
    return i + 1;
}

// Example usage:
const sortedArray = [1, 1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8, 9];
const result = countUniqueValues(sortedArray);
console.log(result); // Output: 9
