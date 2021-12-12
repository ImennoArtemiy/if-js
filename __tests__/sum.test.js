/* eslint-disable */
const sum = require('./../sum')

test('sum should return a + b', () => {
  expect(sum(5,6)).toBe(11);
})
test('negative sum', () => {
  expect(sum(-7,5)).toBe(-2);
})
