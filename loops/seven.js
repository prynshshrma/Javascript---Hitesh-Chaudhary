const myNums = [1,2,3,4,5]

const newNums = myNums.map( function(nums) {
    return nums+10;
})



console.log(newNums);



// Chaining 

const myNums2 = [4,5,6,7,8]

const new2 = myNums2
.map(function(num) {
    return num*2  // 4*2 = 8
})
.map(function(num){
    return num+1  // 8+1 = 9
})
.filter(function(num){
    return num>11
})

console.log(new2);

