//implement function which accepts a variable number of arguments, and checks whether 
//there are any duplicates among the arguments passed in. You can solve this using 
//the frequency counter pattern or the multiple pointers pattern 

//frequency counter solution 
function areThereDuplicates(...args) {
    const frequencyCounter = {};
    const duplicates = [];

    for (let value of args) {
        frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    }

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            duplicates.push(key);
        }
    }

    console.log('Number of duplicates:', duplicates);

    return duplicates.length > 0; // Return true if there are duplicates, false otherwise
}

areThereDuplicates(1, 2, 3, 4, 5, 2, 5);
