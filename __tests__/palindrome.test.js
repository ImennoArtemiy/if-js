/* eslint-disable */
const palindrome1 = require('./../palindrome')

test('function should return "madam" is a palindrome', () => {
  expect(palindrome1('madam')).toBe(true);
})

test('function should return "madams" is a not palindrome', () => {
  expect(palindrome1('madams')).toBe(false);
})
