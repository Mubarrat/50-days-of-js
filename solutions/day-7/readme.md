# Sum even numbers

Write a function `sumOfEvens(arr)`, which takes an array `arr` as an argument. This function should return a sum of every even number in the array.

## Instructions

*   If the input array is empty or there are no even numbers, then return 0.
*   The input array will contain only numbers.

## Example test cases

```javascript
sumOfEvens([1, 1, 1, 2, 2, 2, 3, 3, 3]); // Output: 6
sumOfEvens([]); // Output: 0
sumOfEvens([-5, 0, 5, -4, 1, 6, -3, 2, 7]); // Output: 8
```

### Hint

You can use the built-in method `.reduce()` or a `for` loop

Make sure you export the function for writing the tests
