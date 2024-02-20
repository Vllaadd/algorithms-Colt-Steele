// naive solution
function charCount(str) { 
    var result = {};
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

//refactor
function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) {
       obj[char] = ++obj[char] || 1;
        };
    }
    return obj;
}

