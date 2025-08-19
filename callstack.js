function one(){
    console.log("one");
    two()
     // output will be one, two, three as two function includes both two and three
}

function two(){
    console.log("two");
    three()

    // output will be two, three as three function contains only three
    
}
function three(){
    console.log("three");
    
    
}



one()
two()
three()