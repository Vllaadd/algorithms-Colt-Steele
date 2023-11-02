// integer array sorted in non-decreasing order 
// remove duplicates 
// order should remain the same 
// return the number or remainin unique elements, as K 

// create the function
// nums is the parameter of the function when we call it 
// iterate through the array 
//  create pointers since the array is sorted



function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
        }
    }

    return k;
}



removeDuplicates([2, 4, 5, 7, 4, 6, 5, 9]); 
