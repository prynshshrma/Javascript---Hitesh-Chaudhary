let user = [5,6,7,8,8]

if(user){
    console.log("exists");
    
}
else{
    console.log("not exist!");
    
}


// falsy values

// false, 0, BigInt 0n, -0 (for interview purpose), "" (empty string), null, undefined, NaN


// truthy values
// whatever in the string is considerd to be truthy

// 'false' , '0', [], {}, function(){}, " "


// checking whether an array is empty or not
let myArr = []
if (myArr.length === 0) {
    console.log("Array is empty!"); 
    
}


// checking whether an object is empty or not
let myObj = {}
if(Object.keys(myObj).length === 0){
    console.log("The object is empty!");
    
}


// Nulish Coalescing Operator(??): null  undefined 

val1 = undefined??50
console.log(val1);   // it returns the right side value only when the left side value is null or undefined unless it returns the left side value


// ternary operator
// similar to if/else but different in syntax 

// condition ? true : false

let price = 990

price>=100 ? console.log("more") : console.log("less");


