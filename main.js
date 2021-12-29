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
    console.log('число из массива ' + '"' + number + '"' + ' больше 5, но меньше 10');
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
  if (i % 3 === 0 || i % 5 === 0) {
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
function minNumber1(a, b) {
  return (a < b) ? a : b;
}

console.log(minNumber(4, 59));
console.log(minNumber(-20, -40));
console.log(minNumber(5, 5));

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
function maxNumber1(a, y) {
  return (a > y) ? a : y;
}

console.log(maxNumber(4, 59));
console.log(maxNumber(-20, -40));
console.log(maxNumber(13, 13));

// Replacing array elements

function getRandomArray(min, max) {
  min = 0;
  max = 100;
  let randomArray = [];

  for (let i = 0; i < 10; i++) {
    let randomNums = Math.floor(Math.random() * (max - min) + min);
    randomArray.push(randomNums);
  }
  return (randomArray);
}

function strZero(arr) {
  let newArr = [];
  arr = getRandomArray();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 10 === 0 || arr[i] === 0) {
      arr[i] = arr[i].toString()
        .replace('0', 'zero');
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
function sumCyr(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sumCyr(4)(3));

// Color the paragraphs on click (click event)
const arrColors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

let textFirst = document.getElementById('text1');
let textMiddle = document.getElementById('text2');
let textLast = document.getElementById('text3');

function changeColor() {
  let color = 0;
  return function () {
    this.style.color = arrColors[color];
    color++;
    if (color === arrColors.length) {
      color = 0;
    }
  };
}

textFirst.addEventListener('click', changeColor());
textMiddle.addEventListener('click', changeColor());
textLast.addEventListener('click', changeColor());

// LESSON-5

console.log('');
console.log('LESSON-5');
console.log('');

// Formatting date

function dateFormatting(date) {
  const dateReg = /^\d{4}-\d{2}-\d{2}$/;
  if (dateReg.test(date)) {
    date = date.split('-')
      .reverse()
      .join('.');
    return date;
  } else {
    return 'enter correct date format';
  }
}

// Search object

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(keyword) {
  keyword = keyword.toLowerCase();
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (Object.values(data[i])
      .toString()
      .toLowerCase()
      .includes(keyword)) {
      result.push(Object.values(data[i])
        .toString());
    }
  }

  return result;
}



// LESSON-6

console.log('');
console.log('LESSON-6');
console.log('');

// Updated palindrome

function updatedPalindrome(str) {
  str = str.toLowerCase();
  let reverseWord = str.split('')
    .reverse()
    .join('');
  return str === reverseWord;
}

console.log(updatedPalindrome('шАлаШ'));
console.log(updatedPalindrome('камыш'));

// Search objects

const hotels = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa Cruz de Tenerife',
    country: 'Spain',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Virgin Hotel',
    city: 'Chicago',
    country: 'USA',
  },
  {
    name: 'Grand Beach Resort',
    city: 'Dubai',
    country: 'United Arab Emirates',
  },
  {
    name: 'Shilla Stay',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    name: 'San Firenze Suites',
    city: 'Florence',
    country: 'Italy',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
  },
  {
    name: 'Black Penny Villas',
    city: 'BTDC, Nuca Dua',
    country: 'Indonesia',
  },
  {
    name: 'Koko Hotel',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    name: 'Ramada Plaza',
    city: 'Istanbul',
    country: 'Turkey',
  },
  {
    name: 'Waikiki Resort Hotel',
    city: 'Hawaii',
    country: 'USA',
  },
  {
    name: 'Puro Hotel',
    city: 'Krakow',
    country: 'Poland',
  },
  {
    name: 'Asma Suites',
    city: 'Santorini',
    country: 'Greece',
  },
  {
    name: 'Cityden Apartments',
    city: 'Amsterdam',
    country: 'Netherlands',
  },
  {
    name: 'Mandarin Oriental',
    city: 'Miami',
    country: 'USA',
  },
  {
    name: 'Concept Terrace Hotel',
    city: 'Rome',
    country: 'Italy',
  },
  {
    name: 'Ponta Mar Hotel',
    city: 'Fortaleza',
    country: 'Brazil',
  },
  {
    name: 'Four Seasons Hotel',
    city: 'Sydney',
    country: 'Australia',
  },
  {
    name: 'Le Meridien',
    city: 'Nice',
    country: 'France',
  },
  {
    name: 'Apart Neptun',
    city: 'Gdansk',
    country: 'Poland',
  },
  {
    name: 'Lux Isla',
    city: 'Ibiza',
    country: 'Spain',
  },
  {
    name: 'Nox Hostel',
    city: 'London',
    country: 'UK',
  },
  {
    name: 'Leonardo Vienna',
    city: 'Vienna',
    country: 'Austria',
  },
  {
    name: 'Adagio Aparthotel',
    city: 'Edinburgh',
    country: 'UK',
  },
  {
    name: 'Steigenberger Hotel',
    city: 'Hamburg',
    country: 'Germany',
  },
];




function searchInArray (str) {
  str = str.toLowerCase();

  return hotels.reduce((acc, item) => {
    if (Object.values(item).toString().toLowerCase().includes(str)) {
      acc.push(`${item.country}, ${item.city}, ${item.name}`)
    }
    return acc;
  }, [])
}

console.log(searchInArray('uk'));

// Сопоставте страны с городами из массива

function sortCityForCountry (array) {
  return array.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item.country)) {
      acc[item.country] = [item.city];
    } else {
      acc[item.country].push(item.city);
    }

    return acc;
  }, {})
}

console.log(sortCityForCountry(hotels));


//LESSON-7

console.log('');
console.log('LESSON-7');
console.log('');

// Object comparison

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

function deepEqual (object1, object2) {
  const iAmObject = typeof object1 === 'object' && typeof object2 === 'object';

  if (iAmObject) {

    for (let prop in object1) {
      let objKeyLength = Object.keys(object1).length
      let objKey2Length = Object.keys(object2).length
      if (objKeyLength !== objKey2Length) return false;
      if (!object2.hasOwnProperty(prop)) return false;
      if (typeof object1[prop] === 'object' && typeof object2[prop] === 'object') {
        const result = deepEqual(object1[prop], object2[prop]);
        if (!result) return false;
      } else {
        if (object1[prop] !== object2[prop]) return false;
      }
    }
    return true;
  } else {
    return object1 === object2;
  }
}

console.log(deepEqual(obj1, obj2))
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(obj3, obj2));


// Calendar month

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {

  let arrayWeek = [];
  let weekDay = 0;
  const resultMonth = [];

  if (dayOfWeek) {
    for (let i = 0; i < dayOfWeek; i++) {
      arrayWeek.unshift(daysInMonth - i)
    }
    while (arrayWeek.length < daysInWeek) {
      arrayWeek.push(++weekDay);
    }
    resultMonth.push(arrayWeek);
  }

  return resultMonth;
}

console.log(getCalendarMonth(30, 7, 4));

//LESSON-7

console.log('');
console.log('LESSON-7');
console.log('');

const currentYear = 2021;

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName () {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor({firstName, lastName, admissionYear, courseName})
  {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course () {
    return `${currentYear - this.admissionYear} курс`;
  }
}

class Students {
  constructor(students) {
    this.students = students
  }

  getInfo(students) {
    const result = [];
    instancesStudents.sort((a, b) => a.course > b.course ? 1 : -1);
    for (let i = 0; i < instancesStudents.length; i++) {
      result.push(`${instancesStudents[i].fullName} - ${instancesStudents[i].courseName}, ${instancesStudents[i].course}`);
    }
    return result;
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

const instancesStudents = studentsData.map(student => new Student(student));
const students = new Students(instancesStudents);

console.log(students.getInfo());
