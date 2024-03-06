//Write a recursive function called reverse 
//which accepts a string and returns a new string in reverse.

function reverse(str) {
    // Base case: if the string is empty, return an empty string
    if (str === '') {
        return '';
    }

    // Recursive case: concatenate the last character with the reversed substring
    return str.slice(-1) + reverse(str.slice(0, -1));
}

// Example usage:
const result = reverse('hello'); // This will return 'olleh'
console.log(result);
