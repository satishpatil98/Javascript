console.log("Hello world")

console.log("Data Types")

console.log("String")

// Premitive type
// String 
// Number
// Boolean 
// Undefined
// null

// Non Premitive types 
// Objects  : string ,number or object , array can be store.
// Array : array 
// set 

// What is mutable and immutable. 

// Memory Management stake and Heap 



const pi = 3.14 
let name = "satish"
var var1 = "" // not to use 


var var1 = "abcd" // not good practice 

//let name ="abcde"

// Data types

// String 

let str1 = "xyz abc" // 'xyz'

let a = str1.split("")
console.log(a);


let a1 = str1.split(" ")
console.log(a1);

// mutable and imutable
console.log("str1 before changing ",str1)
str1 = "xyz1"
console.log("str1 after changing ",str1)

str1 = str1 + "123"
console.log ("after chnage 2 ", str1)
console.log("uper case ",str1.toUpperCase()) 

console.log ("original string ", str1)



console.log ("Type of str1" , typeof(str1))


let num1 = 123 

let str2 = "123"
//num1.split("")

console.log("con1 ",num1 == str2)

console.log("cond2  ",num1 === str2)


// Boolean store true / false 

// Undefined

console.log("type of undefined ::",typeof(undefined))

let variable1 ;

console.log("datatype of varibale1",typeof(variable1))

// null

console.log("datatype of null",typeof(null))

variable1 !== null

null 

// temp  // instead of null 0 

// Objet  // non premitive , mutable 


let obj1 = {
    "name":"satish",
    "empcode":"abcd"
}

console.log("obj1 ",obj1)

obj1.address = "pune"

console.log("after chanding obj1 ",obj1)


let obj2 = obj1

obj2.pin="411033"

console.log("obj1" , obj1)
console.log("obj2",obj2)

