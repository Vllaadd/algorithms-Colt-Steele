var merge = function(nums1, m, nums2, n){
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;

    while(p1 >= 0 && p2 >= 0){ 
        if(nums1[p1] > nums2[p2]){
            nums1[p] = nums1[p1];
            p1 --;
        }else{
            nums1[p] = nums2[p2];
            p2 --;
        }
        p --
    }

    while(p2 >= 0){
        nums1[p] = nums2[p2];
        p2 --;
        p --;
    }
};

// Considering that we need to sort elemenets in the new, merged array, we
// are starting with the last element in the array, which is "m - 1". We do 
// the same with the second array and the merged array. Once the pointers are declared, 
// we can iterate through all three arrays 

//We iterate through both arrays (nums1 and nums2) and which element is larger we place it in the new, merged array nums1. 
// Remember that the order needs to be non-descending. We are placing the larger elements into the new, merbged array (nums1) 
// because we are iterating the backward way (p--). If it was P++, then we would be placing smaller element into the new array. 

// The final code takes care of the all remaining elements of the nums2, after all the elements of the first array 
// are placed in the new array. This code takes care of all the remaining elements of the second array (nums2). 



