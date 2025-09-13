// for in
//for in loop is iteratable on both arrays and objects

const myObj = {
    js : "javascript",
    cpp : "C++",
    py : "Python",
}

for (const i in myObj) {
      console.log(i, " ", myObj[i]);
    //console.log(i);
    
}



console.log();


const myArr = ["cpp", "java", "python"]

for (const i in myArr) {
   console.log( myArr[i]);     
   
}


