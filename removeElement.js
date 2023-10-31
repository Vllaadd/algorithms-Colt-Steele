function removeElement(nums, val){
    let k = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] != val){
        nums[k] = nums[i];
        k++;
    }
}
return k
}

const result = removeElement(nums, val);
console.log(nums.slice(0, result)); 
console.log(result); 