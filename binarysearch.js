//given a sorted array of integers, whire a function called search
//that accepts a value and returns the index where the value 
//passed to the function is located. if the value is not found, return -1


function search(array, val) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

//naive solution
function search(arr, val){
for(let i = 0; i < arr.length; i++){
if(arr[i] === val)
{
return i;
}
}
return -1;
}