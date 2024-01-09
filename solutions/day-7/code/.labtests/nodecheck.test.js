import { sumOfEvens } from './index';

test('sums up even numbers in a simple array', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const expectedOutput = 12;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('returns 0 if there are no even numbers', () => {
  const arr = [1, 3, 5, 7, 9];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('handles an array with only one even number', () => {
  const arr = [2];
  const expectedOutput = 2;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('handles an array with only one odd number', () => {
  const arr = [1];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('returns 0 for an empty array', () => {
  const arr = [];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('sums up even numbers in an array with negative numbers', () => {
  const arr = [-2, -1, 0, 1, 2, 3];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('sums up even numbers in an array with both positive and negative numbers', () => {
  const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('handles an array with all even numbers', () => {
  const arr = [2, 4, 6, 8, 10];
  const expectedOutput = 30;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('handles an array with all odd numbers', () => {
  const arr = [1, 3, 5, 7, 9];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('sums up even numbers in an array with duplicates', () => {
  const arr = [2, 4, 2, 4, 2, 4];
  const expectedOutput = 18;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});

test('handles an array with one positive even number and one negative even number', () => {
  const arr = [-2, 2];
  const expectedOutput = 0;
  expect(sumOfEvens(arr)).toEqual(expectedOutput);
});