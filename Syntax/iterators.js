const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach((fruit) => console.log(`I want to eat a ${fruit}`));

const animals1 = [
  'Hen',
  'elephant',
  'llama',
  'leopard',
  'ostrich',
  'Whale',
  'octopus',
  'rabbit',
  'lion',
  'dog',
];

// Create the secretMessage array below
const secretMessage = animals.map((animal) => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers1 = bigNumbers.map((numbers) => numbers / 100);

console.log(smallNumbers1);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter((number) => number < 250);

const favoriteWords = [
  'nostalgia',
  'hyperbole',
  'fervent',
  'esoteric',
  'serene',
];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter((words) => words.length > 7);

const animals = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant',
];
const foundAnimal = animals.findIndex((animal) => animal === 'elephant');
const startsWithS = animals.findIndex((animal) => animal.charAt(0) === 's');

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// const check = (word) => word.length < 6 ;
// console.log(words.some(check));
console.log(words.some((word) => word.length < 6));

const interestingWords = words.filter((word) => word.length > 5);

console.log(interestingWords.every((word) => word.length > 5));

const cities = [
  'Orlando',
  'Dubai',
  'Edinburgh',
  'Chennai',
  'Accra',
  'Denver',
  'Eskisehir',
  'Medellin',
  'Yokohama',
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((city) => console.log(`Have you visited ${city}?`));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => acc + currVal[0], 'C');

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);

// Choose a method that will return a boolean value
nums.every((num) => num < 0);
