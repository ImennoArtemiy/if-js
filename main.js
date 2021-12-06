/* eslint-disable */
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
