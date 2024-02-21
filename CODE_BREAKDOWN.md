# Problem Solving Steps 
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

# same 
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


# anagram 
1. Pattern used: `Frequency Counter`
2. Check if the lengts of both strings are equal 
3. Initialize an empty object to store the frequency of characters 
4. If the letter exists, incremenet its count; otherwise, set it to 1
5. Iterate through each character in the second string `second`. If the character is not found in the `loop` object or its count is zero, it's not a valid anagram, so return `false`
6. if the loops complete successfully, return `true`, indicating that the strings are valid anagrams 

# sameFrequency
1. Pattern used: `Frequency counter`
2. Initialization:
    - Convert the numbers to strings (strNum1 and strNum2) for easier digit manipulation.
    - Check if the lengths of the strings are different; if so, return false.
    - Initialize frequency counters for each digit in both numbers (frequencyCounter1 and frequencyCounter2).
3. Counting Frequencies:
    - Count the frequency of each digit in the first number (num1) and store it in frequencyCounter1.
    - Count the frequency of each digit in the second number (num2) and store it in frequencyCounter2.
4. Comparison:
    - Check if the frequency of each digit is the same in both counters.
    - If any frequencies differ, return false.
5. Result:
    - If all frequencies match, return true, indicating that the two numbers have the same frequency of digits.

# areThereDuplicates
1. Pattern used: `Frequency counter`
2. Frequency Counter Initialization:
    - Initialize a frequency counter object `frequencyCounter` to store the count of each argument.
    - Initialize an array `duplicates` to store duplicate values.
3. Building Frequency Counter:
    - Iterate through the provided arguments using the spread operator `...args`.
    - For each argument `value`, update its count in the frequencyCounter object.
4. Checking for Duplicates:
    - Iterate through the keys of the `frequencyCounter` object.
    - If the count of a value is greater than 1, it is a duplicate; add it to the duplicates array.
5. Logging Duplicates:
    - Log the duplicates array for visualization purposes.
6. Result:
    - Return true if there are duplicates (length of duplicates array is greater than 0), otherwise, return false.


# binarySearch
1. Pattern used: `Divide and conquer`
2. Iterative Binary Search:
    - Initialize pointers (min and max) for the search range.
    - Use a while loop to iteratively narrow down the search range until the target is found or the range is empty.
    - Calculate the middle index and compare the element at that index with the target value.
    - Adjust the search range based on the comparison.
    - Continue the process until the target is found or the range is empty.
3. Naive Solution:
    - The naive solution uses a simple linear search to iterate through the array until the target value is found.
    - It returns the index if the target is found or -1 if not.
4. Result:
    - The binary search returns the index of the target value if found, or -1 if not found.
    - The naive solution returns the index if the target is found or -1 if not found.

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

# averagePair
1. Pattern Used: `Multiple Pointers`
2. Pointer Initialization:
    - Initialize two pointers (left and right) at both ends of the sorted array.
3. Iterative Process:
    - Iterate through the array using multiple pointers while left is less than right.
    - Calculate the current average of elements at the current pointers.
    - Check if the current average is equal to the target. If so, return true.
    - If the current average is less than the target, move the left pointer to the right.
    - If the current average is greater than the target, move the right pointer to the left.
4. Termination:
    - The loop terminates when left is no longer less than right.
5. Result:
    - Return false if no pair with the target average is found during the iteratio

# countUniqueValues
1. Pattern used: `Multiple pointers`
2. Initialization:
    - Check if the array is empty. If so, return 0.
    - Initialize the uniqueCount variable with 1, as the first element is always considered unique.
3. Iterative Process:
    - Iterate through the array using multiple pointers (i.e., i and i - 1).
    - Compare the current element with the previous one.
    - If the current element is different from the previous one, increment the uniqueCount.
4. Result:
    - Return the count of unique values in the array.
5. Explanation:
    - The Multiple Pointers pattern efficiently identifies unique values in a sorted array.
    - The uniqueCount variable keeps track of the number of unique values.
    - The loop iterates through the array, comparing adjacent elements to identify unique values.
    - The count is incremented whenever a new unique value is encountered.

# maxSubarraySum 
1. Pattern used: `Sliding Window`
2. Naive approach: 
    - check if `num` is greater than the length of the array. If so, return `null`
    - initialize `max` to negative infinity 
    - use nested loops to iterate through subarrays of length `num`
    - calculate the sum `temp` of each subarray and update `max` if the current sum is greater 
    - return the maximum sum 
3. Refactored solution: 
    - Check if the length of the array is less than num. If so, return null.
    - Initialize maxSum and tempSum to zero.
    - Calculate the initial sum of the first num elements and set it to maxSum.
    - Iterate through the array starting from index num.
    - Update tempSum by subtracting the first element of the previous subarray and adding the next element.
    - Update maxSum with the maximum value between the current maxSum and tempSum.
    -  Continue the iteration.
    - Return the final maximum sum.   

# findLongestSubstring
1. Pattern used: `Sliding window`
2. Initialization:
    - Initialize variables for the maximum length (maxLength), start pointer (start), and character index map (charIndexMap).
3. Iterative Process:
    - Iterate through the string using a sliding window approach.
    - For each character in the string:
    - Check if the character is already in the current substring.
    -   - If yes, update the start pointer to the next index after the last occurrence of the character.
    - Update the character's index in the map.
    - Update the maximum length of the substring without repeating characters.
4. Result:
    - Return the maximum length of a substring without repeating characters.
5. Explanation:
    - The Sliding Window pattern efficiently identifies the longest substring without repeating characters.
    - The sliding window is represented by the start and end pointers.
    - The charIndexMap keeps track of the index of each character's last occurrence.
    - The algorithm adjusts the window and updates the maximum length whenever a repeating character is encountered.

# isSubsequences
1. Pattern used: `Sliding window`
2. Initialization:
    - Initialize variables for the maximum length (maxLength), start pointer (start), and character index map (charIndexMap).
3. Iterative Process:
    - Iterate through the string using a sliding window approach.
    - For each character in the string:
        - Check if the character is already in the current substring.
        - If yes, update the start pointer to the next index after the last occurrence of the character.
        - Update the character's index in the map.
        - Update the maximum length of the substring without repeating characters.
4. Result:
    - Return the maximum length of a substring without repeating characters.
5. Explanation:
    - The Sliding Window pattern efficiently identifies the longest substring without repeating characters.
    - The sliding window is represented by the start and end pointers.
    - The charIndexMap keeps track of the index of each character's last occurrence.
    - The algorithm adjusts the window and updates the maximum length whenever a repeating character is encountered.

# minSubArray
1. Pattern used: `Sliding window`
2. Initialization:
    - Initialize variables for the minimum length (minLength), start and end pointers (start and end), and current sum (sum).
3. Iterative Process:
    - Iterate through the array using a sliding window approach.
    - Adjust the window based on the current sum compared to the target.
    - If the current sum is less than the target, expand the window by moving the end pointer.
    - If the current sum is greater than or equal to the target, update the minLength and contract the window by moving the start pointer.
    - If the current sum is less than the target and we have reached the end of the array, break the loop.
4. Result:
    - Return the minimum length of a subarray with a sum greater than or equal to the target.
5. Explanation:
    - The Sliding Window pattern efficiently finds the minimum size subarray with a sum meeting the target.
    - The window adjusts based on the current sum and the target.
    - The minLength is updated whenever a subarray with a sum greater than or equal to the target is found.

