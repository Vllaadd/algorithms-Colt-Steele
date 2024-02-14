# Section 4 - Problem Solving Approach 
1. **Understand The Problem** 
2. **Concrete Examples**
3. **Break It Down**
4. **Solve or Simplify**
5. **Look Back and Refactor**

# Frequently Used Patterns 
1. **Frequency Counter**
2. **Multiple Pointers**
3. **Sliding Window**
4. **Devide and Conquer**
5. **Dynamic Programming**
6. ***Greedy Algorithms**
7. **Backtracking**

# charCount 
1. **for-loop** 
- The for loop is a fundamental construct in programming used to iterate over elements in a collection, such as na array or a string. It allows executing a block of code repeatedly until a specified condition is met. 
- There are different ways to implement a for loop in JavaScript, as demonstrated in the provided code snippet: 
- **traditional for loop**: 
`for(var i = 0; i < str.length; i++)` 
- **for ... of loop**: 
`for(var char of str)` 

# Same 
1. **splice method**
- `array.splice(startIndex, deleteCount, item1, item2 ...);`
`startIndex` shows us from what index number we are starting the change 
`deleteCount` how many elements are we to delete
`item1 etc` - items to be added

# Valid Anagram 
1. **indexOf**
- the first thing I tried was `two for loops and str1[i] == str2[j]` but in this approach, the moment it finds the fifst pair of characters that are not equal, it returns 'false'. That is not what we were looking for. It should be returning `true` when the characters are in a different order, but still the same. 
- `indexOf` does just that. It checks if the charachter are in any of the indexes in a certain array. 

