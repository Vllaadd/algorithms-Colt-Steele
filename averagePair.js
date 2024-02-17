//write a function called averagePair. Given a sorted array of integers
//and a target average, determine if there is a pair of values in the array where the average
//of the pair equals the target average. There may 
//be more than one pair that matches the average target 

function averagePair(arr, target) {
    if (arr.length < 2) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentAverage = (arr[left] + arr[right]) / 2;

        if (currentAverage === target) {
            return true; 
        } else if (currentAverage < target) {
            
            left++;
        } else {
           
            right--;
        }
    }

    return false;
}

// Example usage:
console.log(averagePair([1, 2, 3], 2.5));    // Output: true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));  // Output: true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // Output: false
