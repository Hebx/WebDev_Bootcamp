const greetWorld = () => 'Hello, World!';
const canIVote = (age) => {
  if (age >= 18) {
    return true;
  }
  return false;
};
const agreeOrDisagree = (agree, disagree) => {
  if (agree === disagree) {
    return 'You agree!';
  }
  return 'You disagree!';
};
// const lifePhase = (age) => {
//   switch (age) {
//     case age < 4:
//       return 'baby';
//     case age < 13:
//       return 'child';
//     case age < 20:
//       return 'teen';
//     case age < 65:
//       return 'adult';
//     case age < 140:
//       return 'senior citizen';
//     case age > 140 || age < 0:
//       return 'This not a valid age';
//     default:
//       return 'Error!';
//   }
// };
const lifePhase = (age) => {
  if (age < 0 || age > 140) {
    return 'This is not a valid age';
  }
  if (age < 4) {
    return 'baby';
  }
  if (age < 13) {
    return 'child';
  }
  if (age < 20) {
    return 'teen';
  }
  if (age < 65) {
    return 'adult';
  }
  return 'senior citizen';
};
console.log(lifePhase(25));

const finalGrade = (midterm, final, homework) => {
  if (
    midterm < 0 ||
    midterm > 100 ||
    final < 0 ||
    final > 100 ||
    homework < 0 ||
    homework > 100
  ) {
    return 'You have entered an invalid grade.';
  }
  const result = (midterm + final + homework) / 3;
  if (result < 60) {
    return 'F';
  }
  if (result < 70) {
    return 'D';
  }
  if (result < 80) {
    return 'C';
  }
  if (result < 90) {
    return 'B';
  }
  if (result < 100) {
    return 'A';
  }
};

const reportingForDuty = (rank, lastName) =>
  `${rank} ${lastName} reporting for duty!`;

const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case 'Mercury':
      return earthWeight * 0.378;
    case 'Venus':
      return earthWeight * 0.907;
    case 'Mars':
      return earthWeight * 0.377;
    case 'Jupiter':
      return earthWeight * 2.36;
    case 'Saturn':
      return earthWeight * 0.916;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
};
console.log(calculateWeight(11, 'Mercury'));
const truthyOrFalsy = (value) => {
  if (value) {
    return true;
  }
  return false;
};
console.log(truthyOrFalsy(0));

const numImaginaryFriends = (totalFriends) => Math.round(totalFriends * 0.33);
const sillySentence = (excited, love, functions) =>
  `I am so ${excited} because I ${love} coding! Time to write some more awesome ${functions}!`;
const howOld = (age, year) => {
  const dateToday = new Date();
  const thisYear = dateToday.getFullYear();

  const yearDifference = year - thisYear;
  const newAge = age + yearDifference;
  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  }
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  }
  return `You were ${newAge} in the year ${year}`;
};
const tipCalculator = (quality, total) => {
  switch (quality) {
    case 'bad':
      return total * 0.05;
    case 'ok':
      return total * 0.15;
    case 'good':
      return total * 0.2;
    case 'excellent':
      return total * 0.3;
    default:
      return total * 0.18;
  }
};
const toEmoticon = (meaning) => {
  switch (meaning) {
    case 'shrug':
      return '|_{"}_|';
    case 'smiley face':
      return ':)';
    case 'frowny face':
      return ':(';
    case 'winky face':
      return ';)';
    case 'heart':
      return '<3';
    default:
      return '|_(* ~ *)_|';
  }
};
const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return 'The shirt is your favorite color!';
  }
  return 'That is a nice color.';
};
const isEven = (number) => {
  if (number % 2 == 0) {
    return true;
  }
  return false;
};
const numberDigits = (x) => {
  let numString = '';
  if (x >= 0 && x <= 9) {
    numString = `Single digit: ${x}`;
  } else if (x >= 10 && x <= 99) {
    numString = `Two digits: ${x}`;
  } else {
    numString = `The number is : ${x}`;
  }

  return numString;
};
console.log(numberDigits(25));
