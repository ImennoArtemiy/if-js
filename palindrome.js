/* eslint-disable */
function palindrome1(word) {
  word = word.toLowerCase();
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
    word[i].toLowerCase();
  }
  return word === reverseWord;
}
module.exports = palindrome1;
