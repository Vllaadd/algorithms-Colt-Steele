//write a function called which accepts a string and returns the length of the longest
//substring with all distinct characters 

function findLongestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        // If the character is already in the current substring, update the start pointer
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }

        // Update the character's index in the map
        charIndexMap[currentChar] = end;

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
console.log(findLongestSubstring(""));             // Output: 0
console.log(findLongestSubstring("rithmschool"));   // Output: 7
console.log(findLongestSubstring("thisisawesome")); // Output: 6
console.log(findLongestSubstring("thecatinth"));    // Output: 7
