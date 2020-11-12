// let vacationSpots = ['Bali', 'Barcelona', 'Bolivia'];
// console.log(vacationSpots[0]);
// console.log(vacationSpots[1]);
// console.log(vacationSpots[2]);

// for(let counter = 5 ; counter < 11; counter++){
//   console.log(counter);
// }

// const vacationSpots = ['Bali', 'Paris', 'Tulum'];
// for (let i = 0; i < vacationSpots.length; i++) {
//   console.log(`I would love to visit ${vacationSpots[i]}`);
// }

// const bobsFollowers = ['John', 'Jane', 'James', 'Joe'];
// const tinasFollowers = ['John', 'Jane', 'Bob'];
// const mutualFollowers = [];
// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       return mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// }

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
  console.log(firstMessage);
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false) {
  console.log(secondMessage);
}

const cupsOfSugarNeeded = 0;
let cupsAdded = 0;
do {
  cupsAdded += 1;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === rapperArray[2]) {
    break;
  }
}
console.log("And if you don't know, now you know.");
