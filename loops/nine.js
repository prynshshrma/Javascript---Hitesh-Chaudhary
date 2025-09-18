// reduce

const myArr = [1,2,3,4]

const myTotal = myArr.reduce( function(acc, cv){
    console.log(`Current Value: ${cv} and Accumulator: ${acc}`);
    
    return acc + cv
}, 9)

console.log(myTotal);




const myCourse = [
    {
        name: "JS",
        price: 2000
    },

    {
        name: "AI/ML",
        price: 3000
    },

    {
        name: "WEB DEV",
        price: 4000
    }
]


// using arrow functions
// the order should be accumulator and then item while passing parameters

const finalPrice = myCourse.reduce( (acc, item) => acc + item.price, 0)
console.log(finalPrice);


const final = myCourse.reduce(function(acc, item){
    return acc + item.price
}, 0)

console.log(final);

