/* eslint-disable */

//LESSON-2

console.log('');
console.log('LESSON-2');
console.log('');

// Working with variables
let user = 'John Doe';
console.log(user);

const student = 'Artem';
console.log(student);

user = student; // Artem
console.log(user);

// Working with primitives
let test = 1;
test++;
test += '1'; // string '21'
console.log(test);

test--; // number 20
console.log(test);

Boolean(test); // test = number 20 (Boolean = 'true')
console.log(test);

// task 8.

const arr = [2, 3, 5, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log('сумма массива в задании N8 = ' + sum);

// task 9.

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr2.length; i++) {
  let number = arr2[i];
  if (number > 5 && number < 10) {
    console.log ('число из массива '+ '"' + number + '"' + ' больше 5, но меньше 10');
  }
}

// task 10.

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < arr3.length; i++) {
  let number2 = arr3[i];
  if (number2 % 2 === 0) {
    console.log('"' + number2 + '"' + 'четное число из массива');
  }
}

// additional task 1
let sumMultiply = 0;
for (let i = 1; i <= 999; i++) {
  if (i % 3 === 0 || i % 5 === 0){
    sumMultiply += i;
  }
}
console.log(sumMultiply);

// additional task 2
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let result = '';
    if (i % 3 === 0) {
      result += 'fizz';
    }
    if (i % 5 === 0) {
      result += 'buzz';
    }
    if (i % 3 && 5 === 0) {
      result += 'fizzbuzz';
    }
    console.log(result || i);
  }
}

fizzBuzz(30);

// LESSON-3

console.log('');
console.log('LESSON-3');
console.log('');

// Palindrome
function palindrome(word) {
  word = word.toLowerCase();
  let reverseWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
    word[i].toLowerCase();
  }
  return word === reverseWord;
}

console.log(palindrome('ШалАш'));
console.log(palindrome('гашЫш'));

// MIN first way
function minNumber(a, b) {
  if (a < b) {
    return a;
  }
  if (b < a) {
    return b;
  }
  return (`"${a}" и "${b}" равны между собой`);
}

// MIN second way
function minNumber1 (a, b) {
  return (a < b) ? a : b;
}

console.log(minNumber(4,59));
console.log(minNumber(-20,-40));
console.log(minNumber(5,5));

// MAX first way
function maxNumber(a, y) {
  if (a > y) {
    return a;
  }
  if (y > a) {
    return y;
  }
  return (`"${a}" и "${y}" равны между собой`);
}

//MAX second way
function maxNumber1 (a, y) {
  return (a > y) ? a : y;
}

console.log(maxNumber(4,59));
console.log(maxNumber(-20,-40));
console.log(maxNumber(13,13));

// Replacing array elements


function getRandomArray(min, max) {
  min = 0;
  max = 100;
  let randomArray = [];

  for (let i = 0; i < 10; i++) {
    let randomNums = Math.floor(Math.random() * (max - min) + min);
    randomArray.push(randomNums);
  }
  return(randomArray);
}

function strZero (arr) {
  let newArr = [];
  arr = getRandomArray();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0 || arr[i] === 0) {
      arr[i] = arr[i].toString().replace('0', 'zero');
      console.log(arr[i]);
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// LESSON-4
console.log('');
console.log('LESSON-4');
console.log('');

// Currying
function sumCyr (a) {
  return function (b) {
    return a + b;
  }
}
console.log(sumCyr(4)(3));

// Color the paragraphs on click (click event)
const arrColors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

let textFirst = document.getElementById("text1");
let textMiddle = document.getElementById("text2");
let textLast = document.getElementById("text3");

function changeColor () {
  let color = 0;
  return function () {
    this.style.color = arrColors[color];
    color++;
    if (color === arrColors.length) {
      color = 0;
    }
  }
}

textFirst.addEventListener('click', changeColor());
textMiddle.addEventListener('click', changeColor());
textLast.addEventListener('click', changeColor());
