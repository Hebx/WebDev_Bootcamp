const diceRoll = () => {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.number').firstChild.nodeValue = roll;
  switch (roll) {
    case 1:
      document.querySelector('.dice').className = 'dice one';
      break;
    case 2:
      document.querySelector('.dice').className = 'dice two';
      break;
    case 3:
      document.querySelector('.dice').className = 'dice three';
      break;
    case 4:
      document.querySelector('.dice').className = 'dice four';
      break;
    case 5:
      document.querySelector('.dice').className = 'dice five';
      break;
    case 6:
      document.querySelector('.dice').className = 'dice six';
      break;
    default:
  }
};
document.querySelector('.dice').addEventListener('click', diceRoll);
