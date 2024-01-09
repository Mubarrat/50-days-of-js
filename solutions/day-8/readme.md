# Sum every third number

Write a function `sumOfThirds(arr)`, which takes an array `arr` as an argument. This function should return a sum of every third number in the array, starting from the first one.

## Instructions

*   If the input array is empty or contains less than 3 numbers then return 0.
*   The input array will contain only numbers.

## Example test cases

```javascript
sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3]); // Output: 6
sumOfThirds([]); // Output: 0
sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7]); // Output: -12
```

## Hints

*   You can use the built-in method `.reduce()`.
