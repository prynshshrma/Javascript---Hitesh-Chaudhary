const arr = [1,2,3,4,5]

// const myArr = new Array(2,3,4,6,7) // another method of declaring the array

// // console.log(arr[2]);


// // Array methods

// myArr.push("priyansh", 90) // pushes the element in array in last
// console.log(myArr);

// myArr.pop() // removes the last element of an array
// console.log(myArr);

// myArr.unshift(2) // adds the element in the beginning of the array
// console.log(myArr);


// myArr.shift() // removes the element from beginning of the array
// console.log(myArr);

// console.log(myArr.includes(4))  // checks whether the element is present in the array. returns the boolean type value

// console.log(myArr.indexOf(3)); // returns the index of the element and if not present returns -1


// const newarr = myArr.join() // converts the array into string
// console.log(newarr);




// slice 
console.log("Original ", arr); // original array
console.log();


const slice = arr.slice(1,4)  // returns the copy of the section index elements and does not modify the original array also it doesn't include the last index element while returning
console.log("Slice ", slice);
console.log("Array after slice ", arr);

console.log();



const splice = arr.splice(1,3)
console.log("Splice ", splice); // splice modify the original array by removing the section index elements and also includes the last index element

console.log("Array after splice ", arr);



