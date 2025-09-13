//for of

let arr = [12,34,5,6,7]

for (const i of arr) {     // arr is the object on which we iterate (not the typical JS object)
    console.log(i);
    
}

let greeting = "hello world!"
for (const greet of greeting) {
    if (greet == " ") {
        continue
    }

    // console.log(greet);
    
}


// Maps (contain unique values), (remember order of insertion)
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('USAA', "UNITED STATES OF AMERICAAA")

console.log(map);

for (const [i, j] of map) {   // destructuring the array
    console.log(i, ' ', j);
    
}


// for of is not for the object

const myObj = {
    "game" : "GTA V",
    "game2" : "RDR 2",

}


// for (const [game, name] of myObj) {
//    // console.log(game, " ", name);    
    
// }
