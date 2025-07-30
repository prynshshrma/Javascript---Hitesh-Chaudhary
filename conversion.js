let score = undefined
console.log(typeof score);
// let score = "90a" the value of score is NaN (not a number) because the score doesn't contain a full number. It is the combination of number(90) and character(a)

// but the type of this let score = "90a" shows a number 
// "90" => 90 
// "90a" => NaN  (but its type is number)
// true => 1; false => 0;
// null => 0;
// undefined => NaN



// converting the string value to number using Number()
let score2 = "fifty"
let numberconv = Number(score2)
console.log(typeof numberconv);
console.log(numberconv);


// converting string to boolean value
let isLoggedIn = ""
let booleanconv = Boolean(isLoggedIn)
console.log(booleanconv);
console.log(typeof booleanconv);

// string to boolean 
// "" => false    " " this is not an empty string
// "priyansh" => true  


// number to string

let one = 34
let two = String(one)
console.log(two);
console.log(typeof two);

// boolean to number

let age = true;
let ageSecond = Number(age)
console.log(ageSecond);








