describe('Spread Operator Usage in JS', () => {
  test('Create a function named `sum`', async () => {
    const userFile = await import('/home/damner/code/index').then(
      (t) => t
    );

    expect(typeof userFile.sum === 'function').to.be.true;
  });

  test('Use the spread operator in the `sum` function', async () => {
    const userFile = await import('/home/damner/code/index').then(
      (t) => t
    );

    const result = userFile.sum(1, 2, 3, 4);
    expect(result === 10).to.be.true;
  });

  test('Calculate the sum of all passed arguments', async () => {
    const userFile = await import('/home/damner/code/index').then(
      (t) => t
    );

    const result = userFile.sum(1, 2, 3, 4, 5);
    expect(result === 15).to.be.true;
  });

  test('Export the sum function using ESM syntax', async () => {
    const userFile = await import('/home/damner/code/index').then(
      (t) => t
    );

    expect(typeof userFile.sum === 'function').to.be.true;
  });
});