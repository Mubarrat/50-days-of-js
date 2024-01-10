# Random Numbers

Your task is to create a function which returns a random number in the given range of values both inclusive

1.  Declare a function named `randomNumberGeneratorInRange` with two parameters: `rangeStart` and `rangeEnd`.
    
2.  Inside the function, leverage `Math.random()` to generate a random number between 0 (inclusive) and 1 (exclusive).
    
3.  Scale this number to the desired range. The method to do this involves a little bit of maths, but don’t worry! Here’s a hint. You'll have to use both of your parameters (`rangeStart` and `rangeEnd`) inside this step.
    
4.  As JavaScript's `Math.random()` function does not provide whole numbers, you'll need to round down the resulting random number to the nearest whole number using `Math.floor()` function.
    
5.  Finally, make sure your function returns the generated random number.

Use function calls to test your code and make sure it works as expected.

Happy Coding!
