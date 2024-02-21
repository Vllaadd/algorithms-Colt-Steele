# Section 4 - Problem Solving Steps 
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
1. Pattern used: `Frequency counter` 
2. Naive solution:
    - initialize an empty object `result` to store the frequency of characters
    - iterate through each character in the string 
    - convert the character to lowercase to ensure case-insensitivity 
    - if the character is already a key in the `result` object, incremenet its count. Otherwise, create a new key and set its count to 1 
    - return the `result` object with character frequencies
3. Refactored solution:
    - code refactored for improved readability and efficiency 
    - initialize an mepty object `obj` to store the frequency of characters
    - iterate through each character in the string using a `for ...of` loop 
    - convert the character to lowercase for case-insensitivity 
    - check if the character is alphanumeric using a regular expression `/[a-z0-9]`
    if alphanumeric, use the frequency counter pattern to update the count in the `obj` object 
    - return the `obj` object with character frequencies 

# Same 
1. Pattern used: `Frequency counter` 
2. Naive solution:
    - check if the lengths of both arrays are equal. If not, return `false`
    - iterate through each element in the first array `arr1`
    - calculate the squared value of the current element 
    - find the index of the squared value in the second array `arr2` using `indexOf`
    - if the index is not found `correctIndex === -1`, return `false`
    - if the index is found, remove that element from `arr2` using `splice`
    - if the loop completes successfully, return `true`
3. Refactored solution: 
    - check if the lengths of both arrays are equal. If not, return `false`
    - create frequency counters `frequencyCounter1` and `frequencyCounter2` for both arrays
    - iterate through each element in `arr1` and update its count in `frequencyCounter1`
    - iterate through each element in `arr2` and update its count in `frequencyCounter2` 
    log both frequency counters for visualization
    - check if every value in `arr`` has its corresponding value squaraed in `arr2` with the same frequency using the frequency counters 
    - return `true` if the condition is met; otherwise, return `false`


# Valid Anagram 
1. Pattern used: `Frequency Counter`
2. Check if the lengts of both strings are equal 
3. Initialize an empty object to store the frequency of characters 
4. If the letter exists, incremenet its count; otherwise, set it to 1
5. Iterate through each character in the second string `second`. If the character is not found in the `loop` object or its count is zero, it's not a valid anagram, so return `false`
6. if the loops complete successfully, return `true`, indicating that the strings are valid anagrams 

# sumZero
1. Pattern used: `Multiple pointers`
2. Initialize  two pointers `left` and `right` at both ends of the array
3. Continue iterating as long as the `left` pointer is less than the `right` pointer 
4. Calculate the sum of elements at the current pointers `sum = arr[left] + arr[right]`
5. Zero sum check: 
    - if the sum is zero, return the pair of elements that add up to zero 
    - if the sum is greater than zero, move the `right` pointer to the left 
    - if the sum is less than zero, move the `left` pointer to the right 
6. The loop terminates when the `left` pointer is no longer less than the `right` pointer 
7. If a zero-sum pair is found, it is returned; otherwise, `undefined` is implicitly returned 

 # maxSubarraySum 
 1. `sliding window` is the pattern we use here

 # 
 1. `divide and conquer` pattern is used in this challenge. 

