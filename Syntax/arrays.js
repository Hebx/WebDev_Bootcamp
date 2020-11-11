const hobbies = ['coding', 'gaming', 'reading'];
console.log(hobbies);

const famousSayings = [
  'Fortune favors the brave.',
  'A joke is a very serious thing.',
  'Where there is love there is life.',
];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

const groceryList1 = ['bread', 'tomatoes', 'milk'];
groceryList1[1] = 'avocados';

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
condiments = ['Mayo'];
console.log(condiments);
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = 'Spoon';
console.log(utensils);

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('play games', 'do coding');
console.log(chores);

const chores1 = [
  'wash dishes',
  'do laundry',
  'take out trash',
  'cook dinner',
  'mop floor',
];
chores1.pop();
console.log(chores1);

const groceryList = [
  'orange juice',
  'bananas',
  'coffee beans',
  'brown rice',
  'pasta',
  'coconut oil',
  'plantains',
];
groceryList.shift();
// console.log(groceryList);
groceryList.unshift('popcorn');
// console.log(groceryList);

// console.log(groceryList.slice(1, 4));

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);

const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const target = numberClusters[2][1];
console.log(target);
