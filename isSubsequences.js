//write a function which takes in two strings and checks whether the characters
//in the first string form a subsequence of the characters in the second string. 
//in other words, the function should check whether the characters in the fist string appear somewhere in the second string, 
//without their order changing 

function isSubsequence(str1, str2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < str1.length && pointer2 < str2.length) {
        if (str1[pointer1] === str2[pointer2]) {
            pointer1++; // Move the pointer in the first string
        }
        pointer2++; // Always move the pointer in the second string
    }

    // If pointer1 reaches the end of str1, all characters are found in order
    return pointer1 === str1.length;
}

// Example usage:
console.log(isSubsequence("abc", "acbdbc")); // Output: true
console.log(isSubsequence("abc", "abracadabra")); // Output: true
console.log(isSubsequence("xyz", "acbdbc")); // Output: false
