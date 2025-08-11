function sayHW (){
    console.log("Hello World!");
    
}


sayHW  // function reference
sayHW() // function execution 



function sum(num1, num2){

    // console.log(num1+num2);
    
    return num1+num2
}


sum(2,3)
sum(2,"3")
sum(2,null)
sum(2,undefined)

// console.log(sum(5,6))



function userLogIn (username = "sam"){  // default value declaration 
    // the block of if code doesn't execute once the deafult value is set
    if(username == undefined){
        console.log("Please enter the username");
        return
    }

    return `${username} just logged in!`
}

// console.log(userLogIn("Priyansh"))
console.log(userLogIn())


// suppose we are creating a cart system where we dont know what amount of cart numbers or item numbers we are going to receive from user

// In that case we use the rest operator (... )for performing the operation

function calculatePrice(...p1){  // rest operator 
    return p1
}

// console.log(calculatePrice(566, 89, 843, 74));


// Passing objects in function


const myObj = {
    name: "Lalla Guru",
    age: 19
}



function handleObj (anyObj){ // this passed anyObj in the function is acting as a reference to the above object myObj and is necessary to get access the object items

    console.log(`My Name is ${anyObj.name} and my age is ${anyObj.age}`);
    
}

handleObj(myObj)

// we can also pass the direct object to the function

handleObj({
    name: "priyansh",
    age: 18
})



// Passing arrays to function

const myNewArr = [76,5,44,3,3,454]

function returnArray(get){ // ya pe jo parameter ka naam hoga us behalf pe hi values pe modification hoga
    return get[2]
}


console.log(returnArray(myNewArr));
console.log(returnArray([784,3,4,5,6,7])); // passing the direct array value
