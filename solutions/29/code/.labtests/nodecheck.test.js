import { getValues } from '/home/damner/code/index.js'

describe('test suite', () => {;

test('returns an array of object values', () => {
  const object = { foo: 1, bar: 2, baz: 3 };
  expect(getValues(object)).toEqual([1, 2, 3]);
});

test('returns an empty array for an empty object', () => {
  const object = {};
  expect(getValues(object)).toEqual([]);
});

test('returns an array of object values for a nested object', () => {
  const obj = { 
    person: { name: 'John', age: 30, gender: 'male' },
    car: { make: 'Toyota', model: 'Camry', year: 2022 }
  };
  const result = getValues(obj);
  expect(result).toEqual([{ name: 'John', age: 30, gender: 'male' }, { make: 'Toyota', model: 'Camry', year: 2022 }]);
});

test('returns an array of object values with duplicated keys', () => {
  const obj = { name: 'John', age: 30, name: 'Jane' };
  const result = getValues(obj);
  expect(result).toEqual(["Jane", 30]);
});

});