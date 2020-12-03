const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for (let i = 1; i <= 1000000; i++) {
    if (2 + 2 != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);
const addTwo = (num) => num + 2;

const timeFuncRuntime = (funcParameter) => {
  const t1 = Date.now();
  funcParameter();
  const t2 = Date.now();
  return t2 - t1;
};
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
const checkConsistentOutput = (func, val) => {
  const firstTry = func(val);
  const secondTry = func(val);
  if (firstTry === secondTry) {
    return firstTry;
  }
  return 'This function returned inconsistent results';
};
