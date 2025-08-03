const marvel = ["Ironman", "Thor", "Hulk"]
const dc = ["Superman", "Batman", "Flash"]

// marvel.push(dc) // this will treat dc array as an element and adds it to marvel array as an element at 3rd index
// console.log(marvel);
// console.log(marvel[3]);

const allHero = marvel.concat(dc) // concat combines two or more arrays and returns a new array
console.log(allHero);
console.log(allHero[4]);


const spread = [...marvel, ...dc] // spreading of all values as individual ones by spread operator
console.log(spread);
console.log(allHero[4]);


let another = [1,2,3,[7,8],[4,8,3,2]]
let final = another.flat(Infinity) // flat returns a new array with all the sub arrays concatinating into it
console.log(final);




console.log(Array.isArray("priyansh"));
console.log(Array.from("233454223"));  // converting to array
console.log(Array.from({name: "priyansh"}))




let score = 56
let name = "paul walker"
let negative = -7

console.log(Array.of(score, name, negative)); // OF returns a new array from the set of elements 






