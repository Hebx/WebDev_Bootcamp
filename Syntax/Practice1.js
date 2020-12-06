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
