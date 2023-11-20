// Function definiation : it is a set of code / reusable code to perform some repetative tasks 
// funtion can return some value or can return nothing 
// function can take zero or more parameters 

// Syntax 
// this is called functin declaration 
function nameofFunction1 (){ // function with zeror parameters  and retun nothing 
    // function body
}

function nameofFunction2 (param1 ,param2 ,param3 ){ // function with  parameters  and retun addition of parameters  
    // function body
    return param1 + param2 + param3
}


// What is parameters and what is arguments 


function sum (number1,number2){ // number1 , number2 are parameters  means variable names listed in function definations 
    return number1 + number2
}


console.log("sum of 5 and 10 is =", sum(5,10)) 


// what is difference in function reference and function call

let sumref = sum // this is function reference 

let sumofnumber = sum(4,5) // this is called fuction calling 

console.log("normal function call ",sumofnumber)
let sumeofnumber2 = sumref(10,20)
console.log("reference function call ",sumeofnumber2)


// Can we declare function inside another function ? 

function nestedfunctions(){
    
    console.log("outer function")
    function innnerfunction(){
        console.log("innnerfunction")
    }
  //  innnerfunction();
}

nestedfunctions()


// Arrow function 

// syntax  
funname =()=>{
console.log("code logic ") 
}

funname();








