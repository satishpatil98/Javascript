/* What is Hoisting,  declaration of variables and function is put/move on top
 by compiler or interpreter before runing the code */

// What can be Hoisting , only Var and function declaration can be hosted. 

//In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.
// in JavaScript, initializations are not hoisted.

// in JavaScript, initializations are not hoisted.

/* when the variable is used inside the function, the variable is hoisted only to the top of the function
 Hoisting */

// Can function expression be hosted ? //  
// can arrow function hosted ?
// As only Javascript is support the hoisting ,it advise to declare variables and constants before using it.  
/*
const array1 = [];

console.log(array1.unshift(4, 5));
// Expected output: 5
console.log(array1.unshift(2, 3));
console.log(array1);

// Expected output: Array [4, 5, 1, 2, 3]
*/


var b;  // Var declaration 
//console.log("b=",b);
var b =10 
//console.log("after initializations b=",b);

//console.log("C=",c); // gives error : Cannot access 'c' before initialization
let c =10

//console.log("d =",d) // gives error : Cannot access 'c' before initialization 
const d =30

myfun(); // function calling 
// function declaration 
function myfun(){
    console.log("myfun")
}





var greet = function (){ // function expression   // Not hosted 
    console.log("welcome")
}

greet()

// Can arrow function be hoisted ?

// myArrowFun() // arrow function is not hoisted 

myArrowFun =()=>{
    console.log("My Arrow function")
}

myArrowFun()






// how code executes
//        ---------     Hoisting perfom here  ----  
// javascriot code --> machine code (interpreter / compiler) --> execute. 