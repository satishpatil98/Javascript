// Scope  -- means where function and varibales are  access to other code.

// 3 type of scope are the
// 1 Global  // Module / file 
// 2 Function 
// 3 block {} // Black if else block , for loop block , while 

let globlaly = 20
function scope1(){ // function defination
    let localVaribale = 10
    console.log("local variable to function scope1",localVaribale)
    console.log("globlaly in function",globlaly)
}

//console.log("outside local variable to function scope1",localVaribale)
//console.log("globlaly outside of function ",globlaly)
// scope1();


var gloablaA = 20
function scope1forVar(){ // function defination
    var localVaribaleVar = 10
    console.log("local variable to function scope1",localVaribaleVar)
    console.log("globlaly in function",gloablaA)
}
// console.log("local variable outside",localVaribaleVar)

// scope1forVar()


const gloablaB = 20
function scope1forConst(){ // function defination
    const localVaribaleConst = 10
    console.log("local variable to function scope1forConst",localVaribaleConst)
    console.log("globlaly in function",gloablaB)
    // if else 
    {

    }
}

//console.log("local variable to outside  scope1forConst",localVaribaleConst)

// scope1forConst()


// Befor ECMA script 5 // 2015 
//  only used var ,
// let , const 

/*
// Blocak scope 
let letvariable = 10
var varVariable = 20 
const constVar = 30

{
console.log("letvariable ",letvariable)
console.log("varVariable ",varVariable)
console.log("constVar ",constVar)
}
*/


// Blocak scope 


{
    let letvariable = 10
    var varVariable = 20 
    const constVar = 30
}

//console.log("letvariable ",letvariable) // Can not be access 
//console.log("varVariable ",varVariable) // Cabe be access outside block but not access outside of function scope 
//console.log("constVar ",constVar) // Cannot be access out side bloack 




// functions scope 


function fun1 (){
    console.log("func1");

    function fun2(){
        console.log("fun2");
    }

    fun2()
}

//fun1()
// fun2(); // dont have sccesss to local functions outside 

function globalFun(){
    console.log("global function");
}

function anotherFun(){
    globalFun() /// can be access 
    console.log("anotherFun ");
}

anotherFun()


// local function can =not be access out side  function in which local function is declared 
// Global function can be access in any other functions 

// This fuction reule is aaplicable for Class ( property or varibale , function / methods )
// 

Class  className{ // 
    // property  // Scope 
    // Methods or functions  

    // 

}

// file .js file same rule of scope

// Module  // same rule of scope
// class //same rule of scope 


