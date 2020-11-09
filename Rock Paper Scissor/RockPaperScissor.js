/* eslint-disable */
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === 'bomb' ||
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissor'
  ) {
    return userInput;
  }
  console.log('error , please think twice and be wise');
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissor';
    default:
      return 'error';
  }
};
const determineWinner = (userChoice , computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Tie';
} if (userChoice === 'bomb') {
  return 'User Won';
}
 if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'Computer Won';
  } else {
    return 'User Won';
  }
}
if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  } if ( userChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return 'Computer Won';
    } else {
      return 'User Won';
    }
  }
}
function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`You threw ${userChoice}`);
  console.log(`Computer threw ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();