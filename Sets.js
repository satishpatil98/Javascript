/* Sets in javascript are define as colection of unique values , vlaues can be premitive or object or
 user define objects ( class object).*/

// set can be initialise as  New Set()
// elements can be added with the help of add methods 
// set length can be check with size  property  similar to array lenght. 
// itegrating sets 

// cpmparing with array and string or converting array and string to Set 

// for of

/* // 1 of use case to remove duplicate
let array = [1,2,3,2,1]

console.log("array ",array)

let setnumber = new Set(array) // set1.add([1,2,3]) 
console.log("setnumber ",setnumber)
*/

let set1 = new Set()
//console.log("set1",set1)
//console.log("set1 size",set1.size)


for (const item in set1){
    console.log(item)
}

// keys , entires , values
// set1.map()

set1.add(1) // number
set1.add(2)
set1.add(3)

set1.add(3) // try to add duplicate nuber  it is not added 

set1.add("4") // Added sting  /// string 
set1.add("4") // Added sting  ///

const newarray = ["a","b"]
//set1.add([1,2,3]) // this will be added or not 
//set1.add([1,2,3]) // this is added again 

set1.add(newarray)
set1.add(newarray) 

let myObj = {name:"Rahul"}

set1.add(myObj)
set1.add(myObj)
set1.add(myObj)

//console.log(set1)

set1.forEach((element , index) => {
    console.log( element)
});



// Excercise 
// Write a programe to use all methods in set use MDN document 

/*
function Person (){
    this.name="Kumar" // Property name
    this.lastname="varma" // Property lastname
    this.fullname = function (){ // property fullname  function property 
        console.log("inside function :: ",this.name + " " + this.lastname)
        return  this.name + " " + this.lastname
    }
  }

  let person1 = new Person()

  console.log(person1)
  */