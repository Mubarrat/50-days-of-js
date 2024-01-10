# First non-repeating character

Write a function `findCharacter(str)`, which takes a string `str` as the argument. The function should return the first non-repeating character.

## Instructions

*   If no such character is found, return `null`.
*   The input string `str` will not contain whitespace.

## Example test cases

```javascript
findCharacter("hello"); // Output: "h"
findCharacter("abbcddee"); // Output: "a"
findCharacter("aabbcc"); // Output: null
```

## Hints

*   You should start by building a frequency counter object.
