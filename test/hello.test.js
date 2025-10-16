const { sayHello } = require('../src/index');

test('says hello', () => {
  expect(sayHello()).toMatch(/Hello/);
});
