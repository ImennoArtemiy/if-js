/* eslint-disable */
function palindrome(word) {
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  if (word === reverseWord) {
    return (word + ' ' + 'является');
  } else {
    return (word + ' ' + 'не является');
  }
}
