// Objects in js is descripbe as key valu pares seperated by coma
// example 

const person = {firstName:"Virat", lastName:"Rohit", age:30, eyeColor:"blue"};

// What is diference between varibale declaration and initinalization ?

person.hairColor="black"
person.fullname = function() {return this.firstName + " " + this.lastName;}
console.log("person ",person);
console.log("full name ",person.fullname());

// Creating objects
// 1 ) with object litral as above line number 4
// using new keyword 

let person1 = new Object()

// each object have properties and values 
// Properties can be any string constant example 
// values can be any js variable type e.g string , number or any object

// how to acces the valuses of property 

console.log(person.firstName)
console.log(person["firstName"])
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








