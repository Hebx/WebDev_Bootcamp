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
