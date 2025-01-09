const score = 400 
console.log(score)

const balance = new Number(100.0)
console.log(balance);

const newscore = 500
console.log(newscore.toString().length)
console.log(typeof newscore)
console.log(balance.toFixed(2));//toFixed() converts a number to a string, rounded to a specified number of decimal

const otherNumber = 1123.87654

console.log(otherNumber.toPrecision(4)); // precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

const hundreds = 10000000000000000
console.log(hundreds.toLocaleString('en-IN'));


//*************************************************** //

console.log(Math);
console.log(Math.abs(-3))
console.log(Math.cos(0))
console.log(Math.hypot(9,16))//The Math.hypot() method returns the square root of the sum of squares of the passed arguments. It returns NaN if at least one of the arguments cannot be converted to a number
console.log(Math.log(9))
console.log(Math.ceil(4.2))// it take top value
console.log(Math.round(4.3))
console.log(Math.min(4,3,6,9))


console.log(Math.random())// random value between 0 and1

console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))  // 