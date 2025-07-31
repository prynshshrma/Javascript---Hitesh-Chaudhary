// Stack (Primitive)
// the copy of the value is passed in stack remaining the original value unchanged

let myName = "rohan"
let anotherName = myName
anotherName = "rahul"

console.log(myName)
console.log(anotherName);

//    Heap (Reference type)
// In the Heap the value is directly passed rather than its copy

let  userOne = {
    name: "priyansh",
    age: 18
}

let userTwo = userOne

userTwo.age = 19

console.log(userOne.age);
