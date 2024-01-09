# Array.join I - strings

In this coding challenge, you will be implementing a function called `joinElementsWithUnderscore(array)` that takes an array as input and returns a string. The returned string should consist of all the array elements joined by an underscore `_`.

## Instructions

*   If the input array is empty, return an empty string.

## Example test cases

```javascript
const array = ['apple', 'banana', 'orange', 'grape'];
const joinedString = joinElementsWithUnderscore(array);
console.log(joinedString); // Output: 'apple_banana_orange_grape'
```

## Hints

*   You can create a new string, loop over the input `array` and append the current element to it with the `_` separator.
*   You can use the built-in method `.join()` method with `_` as the argument.
