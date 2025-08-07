// singleton
// Object.create



// object literals

let mysym = Symbol("key1")

let user = { 

    name: "Priyansh",
    [mysym]: "key8", // correct syntax of acting a symbol as a key and printing it 
    "full name" : "priyansh sharma",
    age : 18,
    email : "priyansh@google.com",
    isLoggedin : true
    
}

 console.log(user.age);
console.log(user["isLoggedin"]); // recommended for accessing the elements of the objects
console.log(user["full name"]); // this syntax is helpful when the key property contains spaces in it and we want to print the value of it.

console.log(user[mysym]); // accessing the symbol 
console.log(typeof user[mysym]);


user.age = 10 // overwriting the value of the user object
console.log(user.age); 

// Object.freeze(user)   // freezing the object so that no change could occur after that
user.age = 19
console.log(user);

user.location = function(){
    console.log("Mumbai");
    
}

user.location()



user.greeting = function(){
    console.log(`Hello User, ${this["full name"]}`); // referencing a key property inside the same object
    
}

console.log(user.greeting());
console.log(user.greeting); // () are responsible for the function execution and if not done the compiler returns the reference of the function without the execution named as function anonymous

console.log(typeof user.greeting);


// in greeting function we already had console.log(`hello user....). While calling the function, due to the another console.log that is "console.log(user.greeting());" we are getting undefined

user.greeting()  // by writing the function standalone without console.log there will be no undefined






