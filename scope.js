// var c = 9


// the code inside {} is block scope 
// the code outside this {} is global scope

let a = 900

if(true){
    let a = 90
    const b = 842
    // var c = 93 // thatswhy we should not use var because it is global scope, it also impacts the code outside that particular block where it is declared

    console.log("Inner : ", a);
    

}

console.log(a);
// console.log(b);
// console.log(c);


// nesting of functions

function one(){

    const username = "priyansh"


    function two(){
        const website = "youtube"      // andar wala function bahar wale ke values access kar sakta ha coz andar wale function ke liye hi bhar wala global ha 
        console.log(username);

    }

    
    //  console.log(website);
    // or ye website function two ke block tk hi limit ha so ye usse bahar execute hi nhi hoga

         console.log(username);
        
    

    two() // or ye andar wala function execeute hone ke liye bahar wale pe depend krega or bahar yaani parent function execute nhi hua to ye bhi nhi hoga

    // parent function standalone execute ho sakta ha but child function parent function ke bina execute nhi ho skta

}

one() 






// ++++++++++++++++++++++  A lil bit about Hoisting +++++++++++++++++++++

console.log(addOne(3))

function addOne(num){
    return num+1
}


// console.log(addTwo(7)); 

// in this type of function declaration we cant execute the function before the declaration of it

const addTwo = function(num2){
    return num2+2
}








