// const coding = ["cpp", "java", "js"]

// const variable = coding.forEach( function(element, index){
//     console.log(element, index);
    
// } )

// foreach loop doesn't return any value
// console.log(variable);


const myNums = [1,2,3,4,5,6]
const newNums = myNums.filter( function (val) {
    return val>2    // this return keyword is mandatory (explicit return)
} )

console.log(newNums);





const movies = [ 
    {
        name: "Interstellar",
        type: "Science Fiction"
    },

    {
        name: "The Dark Knight",
        type: "Crime Thriller"
    }, 

    {
        name: "Shutter Island",
        type: "Science Fiction"
    }
]


const myMovs = movies.filter( function(movie){
    return movie.type === "Science Fiction"
})

console.log(myMovs);





