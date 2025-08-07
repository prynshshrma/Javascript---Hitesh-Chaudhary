// const appUser = new Object()
// console.log(appUser); 

const appUser = {}
appUser.id = "84jdn"
appUser.email = "lallaguru@gmail.com"
appUser.age = 18

// console.log(appUser);


// nesting of objects

const  regularUser = {
    email : "lallaguru@gmail.com",
    name:  {
        fullname: {
            firstname : "priyansh",
            lastname: "sharma"
        }

    }
}

 console.log(regularUser.name.fullname);

// combining of objects
// the properties must be different in order to combine the objects

const obj1 = {
    place: "Ahemdabad",
    code: 86
}


const obj2 = {
    location: "Lucknow",
    number: 80
}

// let combinedObj = Object.assign({}, obj1, obj2) // .assign used to combine the objects
// console.log(combinedObj);


// the properties of target object is overwritten by source object means if any property is same in both objects the target value that is first object value is replaced by source object value and while using multiple source objects the rightmost object value wins


// Merging the objects by Spread Operator (most of the times used)

const obj3 = {...obj1, ...obj2}
console.log(obj3);



// passing the objects in an array

let name = [

    {
        id : "7347hd"
    },

    {
        id: "89jdj"
    },
]

console.log(name[0].id);  



console.log(regularUser);
console.log(Object.keys(regularUser));  // accessing the keys of the object
console.log(Object.values(regularUser)); // accessing the values of the object
console.log(Object.entries(regularUser)); // stores key and value in an array



console.log(regularUser.hasOwnProperty("isLoggedIn")); // checking whether the object has the property or not











