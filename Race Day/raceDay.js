let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistration = false;
const runnerAge = 25;
if (runnerAge > 18 && earlyRegistration) {
  raceNumber += 1000;
}
if (runnerAge > 18 && earlyRegistration) {
  console.log(`${raceNumber} Race start time at 9:30 am`);
} else if (runnerAge > 18 && !earlyRegistration) {
  console.log(`${raceNumber} Race start time at 11:00 am`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} Race start time at 12:30 am`);
} else {
  console.log('See the registration desk');
}
