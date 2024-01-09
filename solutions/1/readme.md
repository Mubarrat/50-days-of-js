# Find the Distance Value Between Two Arrays

In this lab, your task is to implement the `findTheDistanceValue(arr1, arr2, d)` function. The function takes three inputs:

- Two integer arrays: `arr1` and `arr2`
- An integer: `d`

The function should return the distance value between the two arrays as defined below.

## Function Definition

The distance value is the number of elements `arr1[i]` such that there is not any element `arr2[j]` where the absolute difference `|arr1[i] - arr2[j]|` is less than or equal to `d`.

```javascript
function findTheDistanceValue(arr1, arr2, d) {
  // Your implementation here
}
```

### Examples

Here are some examples to illustrate the function’s behavior:

- `findTheDistanceValue([4,5,8], [10,9,1,8], 2)` will output `2`.
- `findTheDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3)` will output `2`.
- `findTheDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6)` will output `1`.

### Detailed Explanation

Consider the first example `findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)`. In this case, you are comparing each element of `arr1` with every element of `arr2` and checking if the absolute difference between them is greater than `d`. If the absolute difference is greater for all elements of `arr2`, then you count that element in the "distance value".

For `arr1[0] = 4`, the absolute differences with elements of `arr2` are: `[6, 5, 3, 4]`. All of these are greater than `d = 2`, so `arr1[0]` is counted.

In total, `2` elements from `arr1` satisfy the condition, so the output is `2`.

## Constraints

- `1 <= arr1.length, arr2.length <= 500`
- `-1000 <= arr1[i], arr2[j] <= 1000`
- `0 <= d <= 100`

## Tasks

To succeed in this lab, you will need to:

1. Implement the `findTheDistanceValue` function.
2. Export the `findTheDistanceValue` function following the ESM import/export syntax.

Ensure that your code is correct and bug-free. Your solution will be run against an evaluation script, so make sure you have followed the instructions accurately.

Good luck!
