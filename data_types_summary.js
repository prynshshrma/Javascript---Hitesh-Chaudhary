// Primitive Data Types or Call by value 
// String, Boolean, Undefined, Null, Symbol, Number, BigInt

let number = 9
let isLoggedIn = true
let temp = null
let age;

let id = Symbol(123)
let id2 = Symbol(123)
console.log(id === id2) // symbol used to make same items unique although the value are same but their return value are not same
// symbols used to create uniqueness in objects

const num = 85858499393939n // n in last used to represent BigInt

// Reference or Non Primitve 
// Array, Objects, Functions

let arr = [1,2,3,4]
let arr2 = ["a","b","c","d"]  // array


// syntax of an object
// stored in {}, data types in an object can be different
let myObj = {
    name : "priyansh", 
    age : 18,
}


// function can be stored in a variable in js

const myFun = function(){
    console.log("Hello World");
    
}

console.log(typeof temp) // if we check the type of null via typeof function it returns OBJECT type

// All non primitive data types returns OBJECT type and especially function is called Object Function

console.log(typeof num);

