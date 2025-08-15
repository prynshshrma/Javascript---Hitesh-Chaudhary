// IMMIDIATELY INVOKED FUNCTION EXPRESSION
// it is used to create a private scope that prevents the variables from leaking in global scope

(function print(){
    console.log("Hello");
    
})(); // this semicolon ; is important 


// IFFE in arrow function
(() => {
    console.log("World");
    
})()