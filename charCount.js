function charCount(str) {
    //make object to return at end 
    var result = {};
    //loop over string, for each character
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        }
        //if the char is a number/letter AND not in object, add it to object and set value
        else {
            result[char] = 1;
        };
    }
    //return object
    return result;
}

//different approach 


