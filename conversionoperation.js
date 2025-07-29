let score = undefined
// let score = "90a" the value of score is NaN (not a number) because the score doesn't contain a full number. It is the combination of number(90) and character(a)

// but the type of this let score = "90a" shows a number 
// "90" => 90 
// "90a" => NaN  (but its type is number)
// true => 1; false => 0;
// null => 0;
// undefined => NaN


console.log(typeof score);


// converting the string value to number using Number()
let numberconv = Number(score)
console.log(typeof numberconv);
console.log(numberconv);

// converting number to boolean value
 

let isLoggedIn = ""
let booleanconv = Boolean(isLoggedIn)
console.log(booleanconv);
console.log(typeof booleanconv);

// string to boolean 
// "" => false    " " this is not an empty string
// "priyansh" => true  


// number to string

let one = 23
let two = String(one)
console.log(two);
console.log(typeof two);







