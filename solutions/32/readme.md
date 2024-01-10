# Base 3 to Base 10 Conversion Lab

The goal of this lab is to write a JavaScript program that converts a trinary (base-3) number to a decimal (base 10) number. Note that we'll be using first principles, meaning we won't be using the built-in `parseInt` function that JavaScript provides.

### Steps

1.  **What is a Trinary number?** The trinary number system, also known as base-3, uses three digits -- 0, 1, and 2. It's similar to the familiar decimal (base-10) number system that we use every day, only it's based on powers of 3 instead of powers of 10. The right most position in a trinary number represents 3 to the power of 0, the next position to the left represents 3 to the power of 1, and so on.
    
2.  **Understanding the JavaScript `parseInt` method** Before we begin, it's important to understand that JavaScript provides a built-in function, `parseInt`, which can perform base conversion for us. For example, `parseInt('102012', 3)` would convert the base-3 number '102012' into its base-10 equivalent which is `302` . However, in this lab, to understand base conversion at a deeper level, we're going to ignore that this function exists and do the conversion ourselves.
    
3.  **Creating our Custom Conversion Function** We're going to write a function that takes a string representation of a trinary number as input (e.g. '102012'). If the input string is not a valid trinary number, the function will return 0.

Here's a breakdown of how we'll compute the conversion manually:

For example, a string '102012':

*   Multiply each digit by 3 raised to the power of its position, counting from 0 from right to left.
*   For example, the rightmost 2 is at position 0, so you multiply it by 3^0. The next digit to its left, 1, is at position 1, so you multiply it by 3^1.
*   Repeat this process for each digit and then sum the results.

The calculation would look something like this:

```
# "102012"
    1       0       2       0       1       2    # the number
1*3^5 + 0*3^4 + 2*3^3 + 0*3^2 + 1*3^1 + 2*3^0    # the value
  243 +     0 +    54 +     0 +     3 +     2 =  302
```

Following the steps you've learned, implement them programatically in JavaScript to achieve the same results as the `parseInt()` method, you should be able to convert any valid trinary number into its decimal counterpart.
