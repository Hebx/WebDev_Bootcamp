const input = 'Nemo Vir Est Qui Mundum Non Reddat Meliorem';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log(`${inputIndex}`);
  for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    // console.log(`${vowelsIndex}`);
    if (vowels[vowelsIndex] === input[inputIndex]) {
      if (input[inputIndex] === 'e') {
        resultArray.push('ee');
      } else if (input[inputIndex] === 'u') {
        resultArray.push('uu');
      } else {
        resultArray.push(input[inputIndex]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase());
