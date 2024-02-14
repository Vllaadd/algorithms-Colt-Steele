function validAnag(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }

    for (var i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) === -1) {
            return false;
        }
    }
    
    return true;
}


validAnagram('listen', 'silent');
