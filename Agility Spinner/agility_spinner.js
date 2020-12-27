let pushed = false;
let targetInt;
const spinningElem = document.getElementById('spinning');
const result = document.getElementById('result');
const button = document.getElementById('buttonPressed');

button.addEventListener('click', buttonPressed);

function buttonPressed() {
  if (!pushed) {
    pushed = true;
    button.innerHTML = 'START';
  } else {
    result.innerHTML = '';
    button.innerHTML = 'STOP';
    pushed = false;
    setTargetInt();
    spin();
  }
}

function setTargetInt() {
  const targetElem = document.getElementById('targetNum');
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const spin = async () => {
  while (!pushed) {
    for (let i = 0; i < 101; i++) {
      spinningElem.innerHTML = i;
      if (pushed) {
        stop(i);
        break;
      }
      await sleep(75);
    }
  }
};

function stop(i) {
  const offBy = i - targetInt;
  if (offBy == 0) {
    result.innerHTML = 'You WIN!';
  } else {
    result.innerHTML = `You LOOSE! off by ${Math.abs(offBy)}!`;
  }
}

setTargetInt();
spin();
