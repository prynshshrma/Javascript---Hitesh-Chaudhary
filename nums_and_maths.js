const score = 90
console.log(score);


const age = new Number(18)
console.log(age);  // explicitly defining the number

console.log(score.toFixed(2));

console.log(age.toString());

console.log(typeof age);

const other = 1929973

console.log(other.toLocaleString('en-IN'));

console.log();








// +++++++++++++++ MATHS +++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(6.499999));
console.log(Math.floor(6.8)); // round off to lowest value
console.log(Math.ceil(6.3)); // round off to highest value

console.log(Math.random()); // lies bw 0 and 1

console.log(Math.round(Math.random() *10) + 1);
// for generating random values while creating a number guessing or a die game
// Math.round for rounding off the value



const max = 20
const min = 10

// for generating the value bw max and min we consider the below formula

console.log(Math.floor(Math.random() * (max - min + 1)) + min)












