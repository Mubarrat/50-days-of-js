# Capitalise all words

In this coding challenge, you will be implementing a custom `capitaliseAllWords(input)` function. The function should take one string argument called `input`. The input string can consist of one or more words separated by a white space (just like a regular sentence). The function should capitalise all of the words in the string. Keep in mind that the input string can include numbers and special characters.

## Instructions

*   Your function should return a new string.
*   If the input is an empty string, then return an empty string.
*   The input will always be a valid sentence.

## Example test cases

```javascript
capitaliseAllWords("hello world! 123") // Output: "Hello World! 123"
capitaliseAllWords("how are you mate") // Output: "How Are You Mate"
capitaliseAllWords("aNGELA tHE cAT lADY") // Output: "ANGELA THE CAT LADY"
```

## Hints

*   You may need to chain multiple methods.
*   Use the `split` method to split the input string.
