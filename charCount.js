function charCount(str) {
    //make object to return at end 
    var result = {};
    //loop over string, for each character
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()

        if (result[char] > 0) {
            result[char]++;
        }
        else {
            result[char] = 1;
        };
    }
    return result;
}

//different approach 
function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
            obj[char]++;
        }else {
            obj[char] = 1;
        };
    }
    return obj;
}

