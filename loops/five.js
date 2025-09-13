// for each

const coding = ["cpp", "java", "python"]


// call back function doesn't contain name

coding.forEach( function (i){
    // console.log(i);
    
})


function print (value){
    // console.log(value)
}

coding.forEach(print)


coding.forEach(function(value, index, array){
    // console.log(value, index, array);
    
})




const myArr2 = [
    {
        language: "java",
        file: "java"
    },

    {
        language: "javascript",
        file: "js"
    },

    {
        language: "c++",
        file: "cpp"
    }
]


myArr2.forEach( function(value){
    console.log(value.language);
})
    
    