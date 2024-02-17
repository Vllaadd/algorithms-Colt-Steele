//write a function called sameFrequency. Given two integers, find out if 
// the two numbers have the same frequency of digits 

function sameFrequency(num1, num2){
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length){
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(let digit of strNum1){
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }

    for(let digit of strNum2){
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }
console.log(frequencyCounter1, frequencyCounter2);
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}


sameFrequency(12345, 54321);