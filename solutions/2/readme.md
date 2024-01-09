#	Curry Function Implementation

In this lab, you will implement a `curry` function that takes a given function as its argument and returns a **curried** version of that function. A **curried** function is a function that accepts a fewer or equal number of parameters as the original function and returns either another **curried** function or the same value the original function would have returned.

To better understand this concept, let's take a look at some examples:

*   Original function: `sum(1, 2, 3)` would return 6.
*   Curried function: `csum(1)(2)(3)` should also return 6. You can also call the curried function as `csum(1)(2, 3)`, `csum(1, 2)(3)`, or `csum(1, 2, 3)`. All possible methods of calling the curried function should return the same value as the original function.

Here are a few more examples for clarity:

You can go through [this documentation](https://javascript.info/currying-partials) to learn more about Currying.

**Example 1:**

**Input:**

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const csum = curry(sum);
```

**Output:**

```javascript
csum(1)(2)(3) === 6; // true
```

**Explanation:** The curried function csum(1)(2)(3) should return the same value as sum(1, 2, 3), which is 6.

**Example 2:**

**Input:**

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const csum = curry(sum);
```

**Output:**

```javascript
csum(1, 2)(3) === 6; // true
```

**Explanation:** The curried function csum(1,2)(3) should return the same value as sum(1, 2, 3), which is 6.

**Example 3:**

**Input:**

```javascript
function sum(a, b, c) {
  return a + b + c;
}
const csum = curry(sum);
```

**Output:**

```javascript
csum()()(1, 2, 3) === 6; // true
```

**Explanation:** You should be able to pass the parameters in any way, including all at once or none at all. The curried function csum()()(1, 2, 3) should return the same value as sum(1, 2, 3), which is 6.

In this lab, you will be provided with a partially complete code for creating a curried function. Your task is to complete the missing parts of the code and ensure that the function works as expected, passing all the given test cases. You will also need to write the evaluation script and any necessary test cases.

> Make sure to export the function. This lab uses ESM exports.

Good luck, and happy coding!
