import { removeWhitespaces } from '/home/damner/code/index.js'

describe('test suite', () => {;

test('removes all whitespace from a string', () => {
  const input = 'Hello,   World!';
  const expectedOutput = 'Hello,World!';

  const output = removeWhitespaces(input);

  expect(output).toEqual(expectedOutput);
});

test('returns an empty string when given an empty string', () => {
  const input = '';
  const expectedOutput = '';

  const output = removeWhitespaces(input);

  expect(output).toEqual(expectedOutput);
});

test('returns the same string when given a string with no whitespace', () => {
  const input = 'Hello';
  const expectedOutput = 'Hello';

  const output = removeWhitespaces(input);

  expect(output).toEqual(expectedOutput);
});

test('ignores leading and trailing whitespace', () => {
  const input = '   Hello, World!   ';
  const expectedOutput = 'Hello,World!';

  const output = removeWhitespaces(input);

  expect(output).toEqual(expectedOutput);
});

test('handles strings with only whitespace characters', () => {
  const input = '  \t  \n\n   ';
  const expectedOutput = '';

  const output = removeWhitespaces(input);

  expect(output).toEqual(expectedOutput);
});

test('handles strings with multiple consecutive whitespace characters', () => {
  const input = 'This is a sentence.\nIt contains some whitespace.';
  const expectedOutput = 'Thisisasentence.Itcontainssomewhitespace.';

  const output = removeWhitespaces(input);

  expect(output).toEqual(expectedOutput);
});

});