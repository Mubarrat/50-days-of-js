# Time Format Converter

Write a function which can convert the time input given in 12 hours format to 24 hours format

### Steps

1.  Declare a function named `convertTo24HrsFormat` that takes a single argument `time` which is a string in 12-hour format (e.g., '12:10AM').
    
2.  Inside the function, parse the `time` argument to extract the hour and minute components as well as the AM/PM specifier. You can use string slicing or regular expressions for this.
    
3.  Utilize the `endsWith` method from the String object to differentiate between 'AM' and 'PM'.
    
4.  Convert the hour component to 24-hour format based on whether the time is AM or PM:
    
    *   If the time is in PM and the hour component is not 12, add 12 to it.
    *   If the time is in AM and the hour component is 12, change it to 0.
5.  Format the hour component to have two digits by adding an extra '0' at the beginning if it is a single digit.
    
6.  Concatenate the converted hour component, a colon (`:`), and the minute component into a string.
    
7.  Return the string representing the time in 24-hour format.
    

### Input Format:

*   A single string in 12-hour time format, including 'AM' or 'PM' (e.g., '12:10AM', '03:45PM').

### Output Format:

*   A single string in 24-hour time format (e.g., '00:10', '15:45').

### Example

```javascript
console.log(`Converted time: ${convertTo24HrsFormat('12:10AM')}`)  // Output should be '00:10'
console.log(`Converted time: ${convertTo24HrsFormat('03:45PM')}`)  // Output should be '15:45'
```
