//Write a recursive function called isPalindrome 
//which returns true if the string passed to it is a 
//palindrome (reads the same forward and backward). 
//Otherwise it returns false.

function isPalindrome(str) {
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Recursive case: check if the first and last characters are the same
    if (str[0] === str.slice(-1)) {
        // If they are the same, continue checking the rest of the string
        return isPalindrome(str.slice(1, -1));
    } else {
        // If the first and last characters are different, it's not a palindrome
        return false;
    }
}

// Examples
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
