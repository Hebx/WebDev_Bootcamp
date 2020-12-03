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
