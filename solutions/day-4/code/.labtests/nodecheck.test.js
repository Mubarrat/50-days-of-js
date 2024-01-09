import { randomInRange } from '/home/damner/code/index.js'

describe('test suite', () => {

test('randomInRange returns a number greater than min', () => {
  const min = 5;
  const max = 10;
  const num = randomInRange(min, max);

  expect(num).toBeGreaterThanOrEqual(min);
});

test('randomInRange returns a number lesser than max', () => {
  const min = 5;
  const max = 10;
  const num = randomInRange(min, max);

  expect(num).toBeLessThan(max);
});

});