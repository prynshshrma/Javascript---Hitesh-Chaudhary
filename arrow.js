const user = {
    name: "priyansh",
    userId: 789,

    loginMessage : function(){

        console.log(` ${this.name}, welcome to website!`)  // this refers to the current context. We can access the values of different properties using this keyword within the scope
        console.log(this);
    
    }
     
}

// user.loginMessage()
// user.name = "rahul"
user.loginMessage()

console.log(typeof this);
console.log(this);  // there is no object in the scope thatswhy it's output is an empty object  





function myFun(){
    const name = "lallaGuru"
    console.log(this.name); // 'this' doesn't work in function
    
}

// myFun()



// ARROW FUNCTION

// EXPLICIT RETURN

// const add = (num1, num2) => {
//     return num1 + num2;
    
// }


// IMPLICIT RETURN 

// const add = (num1, num2) => (num1 + num2)
const add = () => ({username : "priyansh"}) // returning an object

console.log(add)




