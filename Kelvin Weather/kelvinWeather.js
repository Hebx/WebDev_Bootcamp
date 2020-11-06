// the forecast today in kelvin
const kelvin = 293;
// Celsius value
const celsius = kelvin - 273;
// Fahrenheit value
let fahrenheit = celsius * (9 / 5) + 32;
// rounding the value of fahrenheit
fahrenheit = Math.floor(fahrenheit);
// printing the value in fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// newton scale value
let newton = celsius * (33 / 100);
// rounding the value of newton scale
newton = Math.floor(newton);
// printing the value in fahrenheit
console.log(`The temperature is ${newton} degrees Newton`);
