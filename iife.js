// IMMIDIATELY INVOKED FUNCTION EXPRESSION
// it is used to create a private scope that prevents the variables from leaking in global scope
// basically preventing the function from global scope pollution

(function print(){
    console.log("Hello");
    
})(); // this semicolon ; is important 


// IFFE in arrow function

// passing of arguments in an arrow function
((name) => {
    console.log(`Hello ${name}`);
    
})("Priyansh")