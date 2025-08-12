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



