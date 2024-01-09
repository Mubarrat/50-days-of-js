import { removeFalsy } from '/home/damner/code/index.js'

describe('test suite', () => {

it('should return an empty array for an empty array input', () => {
  const arr = [];
  const output = removeFalsy(arr);
  expect(output).toEqual([]);
});

it('should remove all falsy values from the input array', () => {
  const arr = [0, 1, false, 2, '', 3, undefined, null, NaN];
  const output = removeFalsy(arr);
  expect(output).toEqual([1, 2, 3]);
});

it('should keep truthy values that are not falsey', () => {
  const arr = ['hello', true, {}, [], 42];
  const output = removeFalsy(arr);
  expect(output).toEqual(['hello', true, {}, [], 42]);
});

it('should not modify the original input array', () => {
  const arr = [0, 1, false, 2, '', 3, undefined, null, NaN];
  removeFalsy(arr);
  expect(arr).toEqual([0, 1, false, 2, '', 3, undefined, null, NaN]);
});

it('should return a new array, not modify the original input array', () => {
  const arr = [0, 1, false, 2, '', 3, undefined, null, NaN];
  const output = removeFalsy(arr);
  expect(arr).toEqual([0, 1, false, 2, '', 3, undefined, null, NaN]);
});

});