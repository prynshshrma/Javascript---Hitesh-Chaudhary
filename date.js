// Date ( it is an OBJECT )

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myNewDate = new Date(2023, 6, 9)  // months starts from 0 in JS
// console.log(myNewDate);
// console.log(myNewDate.toDateString());

// let myCreatedDate = new Date("7,12,2023") // according to Indian zone (months starts from 1)
// console.log(myCreatedDate.toDateString());
// console.log(Math.round(Date.now()/1000));


let myNewDate = new Date()
console.log(myNewDate.toDateString());
console.log(myNewDate.getDate()); // month stars from 0



let thirdDate = new Date()
console.log(Math.round(thirdDate/1000)); // conversion of milliseconds to seconds and rounding off them to nearest value



let anchor = new Date()


console.log(anchor.getFullYear());
console.log(anchor.getMonth()+1);  // for the readability of the user


console.log(`The date is ${anchor.toLocaleDateString()} and the time is ${anchor.toTimeString()}`);


 
anchor.toLocaleString('default', {
    weekday: "long"
})


console.log(anchor.toLocaleString());














