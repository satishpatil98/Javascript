// Function definiation : it is a set of code / reusable code to perform some repetative tasks 
// funtion can return some value or can return nothing 
// function can take zero or more parameters 

// Syntax 
// this is called functin declaration 
function nameofFunction1 (){ // function with zeror parameters  and retun nothing 
    // function body
    console.log("Hello Function")
}

// Function calling 
//nameofFunction1();



function nameofFunction2 (param1 ,param2 ,param3 ){ // function with  parameters  and retun addition of parameters  
    // function body
    try {
        let sum = param1 + param2 + param3 ;   
       // console.log("sum =", sum)

        return sum
    } catch (error) {
        
    }

    
}


function fullname (fname ="Satish", lname="Patil" ){ 
    let full_name = fname + " " + lname
    return full_name;
}


let full_name_output = fullname ("Ganesh" , "Shinde")
// console.log(" function call output ::  ",full_name_output)

let fname2 = fullname()
//console.log(" function call output 2::  ",fname2)

let fname3 = fullname("Ganesh")
//console.log(" function call output 3::  ",fname3)

let fullnameFunction = fullname // Reference of function 

//console.log(" call with varibale ",fullnameFunction("Rahul" , " Dravid" ))








// function call 2

//console.log("nameofFunction2 :: ",nameofFunction2(1,2,3))



// What is parameters and what is arguments 


function sum (number1,number2){ // number1 , number2 are parameters  means variable names listed in function definations 
    return number1 + number2
}


//console.log("sum of 5 and 10 is =", sum(5,10)) 


// what is difference in function reference and function call

let sumref = sum // this is function reference  // Function will not get called only recterence is assinged to varibale 

let sumofnumber = sum(4,5) // this is called fuction calling 

//console.log("normal function call ",sumofnumber)
let sumeofnumber2 = sumref(10,20) /// actual function call wo=ith refence name 
//console.log("reference function call ",sumeofnumber2)


// Can we declare function inside another function ? 
//IMP  :: react 

function nestedfunctions(){ // Function defined 
    // Code 
    innnerfunction();
    console.log("outer function")
    
    function innnerfunction(){ // Function defined 
        console.log("innnerfunction")
    }
    innnerfunction();
}

//nestedfunctions() // Function call


// Arrow function 

// syntax  
funname =(param1,param2)=>{
console.log("code logic ") 
}

/*

function funname (param1,param2){
  console.log("code logic ")   
}
*/

funname(); // function call 









const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }


  //console.log (Object.keys(myObj))

