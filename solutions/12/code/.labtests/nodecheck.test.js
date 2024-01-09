import { countVowels } from '/home/damner/code/index.js'

describe('test suite', () => {

test('Empty string has no vowels', () => {
expect(countVowels('')).toBe(0);
});

test('A string with no vowels should return 0', () => {
expect(countVowels('bcdfghjklmnpqrstvwxyz')).toBe(0);
});

test('A string with only one vowel should return 1', () => {
expect(countVowels('hello')).toBe(2);
});

test('A string with multiple vowels should return correct count', () => {
expect(countVowels('abcde')).toBe(2);
});

test('All vowels in string should return correct count', () => {
expect(countVowels('aeiou')).toBe(5);
});

test('Vowels at the beginning of the string', () => {
expect(countVowels('apple')).toBe(2);
});

test('Vowels at the end of the string', () => {
expect(countVowels('crayon')).toBe(2);
});

test('Vowels with uppercase letters', () => {
expect(countVowels('Lemon')).toBe(2);
});

test('Special characters in string should not be counted as vowels', () => {
expect(countVowels('h3ll0 w0rld!')).toBe(0);
});

test('String with spaces and tabs', () => {
expect(countVowels(' \t \t \n\r ')).toBe(0);
});

test('String with all caps', () => {
expect(countVowels('HOW ARE YOU')).toBe(5);
});

test('Numbers should not be counted as vowels', () => {
expect(countVowels('2 hats and 3 coats')).toBe(4);
});

test('Only vowels in string', () => {
expect(countVowels('AEIOU')).toBe(5);
});

test('String with only spaces and tabs', () => {
expect(countVowels(' \t \n')).toBe(0);
});

test('String with all lowercase letters', () => {
expect(countVowels('the quick brown fox jumps over the lazy dog')).toBe(11);
});

test('String with only one character, which is a vowel', () => {
expect(countVowels('a')).toBe(1);
});

test('String with only one character, which is not a vowel', () => {
expect(countVowels('b')).toBe(0);
});

test('String with only special characters', () => {
expect(countVowels('!@#$%^&*()_+')).toBe(0);
});

test('String with a mix of letters and numbers', () => {
expect(countVowels('abc123')).toBe(1);
});

test('String with a mix of letters, numbers, and special characters', () => {
expect(countVowels('a1b2c3!@#')).toBe(1);
});

test('String with a mix of uppercase and lowercase letters', () => {
expect(countVowels('AbCde')).toBe(2);
});

test('String with only one vowel, repeated many times', () => {
expect(countVowels('uuuuuuuuuuuuu')).toBe(13);
});

test('String with only one consonant, repeated many times', () => {
expect(countVowels('ppppppppppppp')).toBe(0);
});

});