# Missing Number Lab

In this lab, you will be tasked with finding the missing number in a given range of numbers. The lab provides you with an array `nums` containing `n` distinct numbers in the range `[0, n]`. Your task is to write a function that returns the only number in the range that is missing from the array.

Using proper ESM import/export in your code, implement the `missingNumber` function:

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function(nums) {
    
};
```

## Description

Write a function called `missingNumber` that takes a single argument:

*   `nums` (array of integers): An array of distinct integers in the range `[0, n]`. The length of the array will be equal to `n`.

The function should return a single integer, which is the missing number in the input array.

### Example 1:

```javascript
missingNumber([3,0,1])
```

**Output:** 2

**Explanation:** n = 3 since there are 3 numbers, so all numbers are in the range `[0,3]`. 2 is the missing number in the range since it does not appear in nums.

### Example 2:

```javascript
missingNumber([0,1])
```

**Output:** 2

**Explanation:** n = 2 since there are 2 numbers, so all numbers are in the range `[0,2]`. 2 is the missing number in the range since it does not appear in nums.

### Example 3:

```javascript
missingNumber([9,6,4,2,3,5,7,0,1])
```

**Output:** 8

**Explanation:** n = 9 since there are 9 numbers, so all numbers are in the range `[0,9]`. 8 is the missing number in the range since it does not appear in nums.

## Constraints

*   `n == nums.length`
*   `1 <= n <= 104`
*   `0 <= nums[i] <= n`
*   All the numbers of `nums` are **unique**.

> There will be a few challenges to this lab that you have to pass. Make sure to **export** `missingNumber()` function so that it can be properly evaluated in the scripts.

Good luck, and happy coding!
