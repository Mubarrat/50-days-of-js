# Anagram checker

Write a function `areAnagrams(strOne, strTwo)`, which takes two strings: `strOne` and `strTwo` as arguments. The function should return `true` if the two strings are anagrams and false otherwise.

An _anagram_ is a word or phrase formed by rearranging the letters of another word or phrase. In other words, two strings are considered anagrams if they have exactly the same characters but in a different order.

> **NOTE:** The function `areAnagrams` should be case-insensitive

### Example test cases

```javascript
areAnagrams('cinema', 'iceman'); // Output: true
areAnagrams('restful', 'fluster'); // Output: true
areAnagrams('hello', 'world'); // Output: false
```

# Hints

*   You should start by converting both strings to either `lowercase` or `UPPERCASE`. This will make it easier to compare them.
*   Once both strings are in the same case, you can find a way to use `.sort()` method on them. Keep in mind that `.sort()` can only be used on arrays.

> The function should be exported properly using ESM Syntax.
