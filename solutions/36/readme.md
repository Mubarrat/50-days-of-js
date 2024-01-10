# nth largest element

In this lab, we are going to implement a JavaScript function that will be used to retrieve the nth largest element from an unsorted array.

The function will be named `nthlargest` and is expected to take in two parameters. The first one is an unsorted array (e.g., \[ 43, 56, 23, 89, 88, 90, 99, 652\]), and the second one is a number n (e.g., 4) representing the position of the largest element that we want to find.

### Input

The input for the program will be two parameters passed to the function `nthlargest`. Here's an example of how the function could be called with an array and a number:

`nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)`

### Output

For the given input, the program should return the following output:

`89`

After sorting the array in descending order, we get \[652, 99, 90, 89, 88, 56, 43, 23\], and the 4th largest element in this array is 89. Hence, the function returns 89.

The challenges of this lab would be managing the unsorted array and successfully identifying the nth largest element.
