// write a function called sumZero which accepts a sorted
// array of integers. The function should find the first 
// pair where the sum is 0. Return an array that includes both
// values that sum to zero or undefined if a pair does not exist 

//naive solution 
function sumZero(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

//refactor 
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

sumZero[-4, -3, -2, -1, 0, 2, 3, 4, 10];