const sentence = ['sense.', 'make', 'all', 'will', 'This'];
const reverseArray = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};
console.log(reverseArray(sentence));
//
const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];
const greetAliens = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(
      `Oh powerful ${arr[i]}, we humans offer our unconditional surrender!'`
    );
  }
};
greetAliens(aliens);
//
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
const convertToBaby = (arr) => {
  const toBaby = [];
  for (let i = 0; i < arr.length; i++) {
    toBaby.push(`${arr[i]}baby`);
  }
  return toBaby;
};
convertToBaby(animals);
console.log(convertToBaby(animals));
//
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = (arr) => {
  const results = [];
  // The 'outer' for loop:
  for (let i = 0; i < arr.length; i++) {
    number = arr[i];

    // The 'inner' while loop:
    // We needed to create a new variable!
    let j = 1;
    while (j < number) {
      j *= 2;
    }
    results.push(j);
  }
  return results;
};
//
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
  console.log(`No ${veg} please. I will have pizza with extra cheese.`);
};
const declineEverything = (arr) => {
  arr.forEach(politelyDecline);
};
const acceptEverything = (arr) => {
  arr.forEach((e) => {
    console.log(`Ok, I guess I will eat some ${e}.`);
  });
};
//
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num
const squareNums = arr => arr.map(toSquare)
//
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']
const shoutGreetings = arr => arr.map(greet => greet.toUpperCase() + '!')
console.log(shoutGreetings(greetings))
/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
    let shoutArray = []
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!')
    }
    return shoutArray
}
*/
//
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
const sortYears = arr => arr.sort().reverse()
console.log(sortYears(years))
//
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (arr1, arr2) => arr1.filter(stuff => arr2.includes(stuff))

console.log(justCoolStuff(myStuff, coolStuff))
//
const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

console.log(isTheDinnerVegan(dinner))
//
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((species1, species2) => species1.numTeeth > species2.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray))
//
const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = arr => arr.indexOf('keys');

console.log(findMyKeys(randomStuff))
//
const dogFactory = (name , breed, weight) => {
 return  {
   name: name,
   breed: breed,
   weight: weight,
   get name() {
     return this._name;
   },
   set name(newName) {
     this._name = newName;
   },
   get breed() {
     return this._breed;
   },
   set breed(newBreed) {
     this._breed = newBreed;
   },
   get weight() {
     return this._weight;
   },
   set weight(newWeight) {
     this._weight = newWeight;
   },
   bark() {
     return 'ruff! ruff!'
   },
   eatTooManyTreats() {
     this._weight++
   }
 }
}