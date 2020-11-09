const getSleepHours = (day) => {
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 7;
    case 'thursday':
      return 7;
    case 'friday':
      return 6;
    case 'saturday':
      return 6;
    case 'sunday':
      return 8;
    default:
      return 'Error!';
  }
};
const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = (idealHours) => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('This is the Perfect amount of Sleep');
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      `You should get ${idealSleepHours - actualSleepHours} Hours more sleep`
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      `You got ${
        actualSleepHours - idealSleepHours
      } Hours more sleep than needed`
    );
  } else {
    console.log('You are not HUman');
  }
};
calculateSleepDebt();
