// Objects in js is describe as key valu pairs seperated by coma
// example 

// to declare alwayas use const. 

let obj1  // declaration 


//const obj2 
const person = {firstName:"Virat", lastName:"Rohit", age:30, eyeColor:"blue"}; // declaration and initialization 


// What is diference between varibale declaration and initinalization ?

person.hairColor="black"
person.fullname = function() {return this.firstName + " " + this.lastName;}
// console.log("person ",person);
// console.log("full name ",person.fullname());

// Creating objects
// 1 ) with object litral as above line number 4
// using new keyword 

const person1 = new Object() /// singaton object  
person1.name = "satish"





// each object have properties and values 
// Properties can be any string constant example 
// values can be any js variable type e.g string , number or any object

// how to acces the valuses of property 

//console.log(person.firstName) // most prefered 
// console.log(person["firstName"]) //

const obj3 = {"full name":"satish Patil"}

//console.log(obj3["full name"])



//==========================
// delete property
// using delete keyword property can be deleted 
// delete person.firstName

// nested objects 

// nested array and objects 
/*
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  */

  const pageMenu = {"menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {"value": "New", "onclick": "CreateNewDoc()"},
        {"value": "Open", "onclick": "OpenDoc()"},
        {"value": "Close", "onclick": "CloseDoc()"}
      ]
    }
  }}

console.log("pageMenu",pageMenu);
console.log(" menu.id",pageMenu.id);
console.log (" menu ", pageMenu.menu.id)
console.log (" menu ", pageMenu.menu)

let mumuobj = pageMenu.menu
console.log(mumuobj.id); 
// Hoisting 

try {
  console.log("print  x (let ) before initialize",x)
  let x = "javascript";  
}
 catch (error) {
  console.log("error ",error);
}
var y
console.log("print y (var) before initialize",y)
//var y = "javascript";
//var y;

console.log(" After error / exception")
try {
  console.log("print z(Const) before initialize",z)
  const z = "javascript";
} catch (error) {
 console.log("const error ",error); 
}


try {
  myfun()
} catch (error) {
  console.log("function error ",error);
}

function myfun(){
console.log("my function ")
}


function fun1(){
  try {
    // code logic 
    
  } catch (error) {
    
  }
  try {
    // code logic 
    
  } catch (error) {
    
  }

}