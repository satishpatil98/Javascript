//1 )  Array declaration 
/*
let array1 = [];
let array2 = new Array()

let array3 = [1,2,3,4];
let array4 = new Array(5,6,7,8)




// 2 ) IMP methods 
// 2.1 ) Push 

let array = ['Hello','Class', 
             'JavaScript'];
             
console.log("new array Lenght after push :",array.push('React')); ;

console.log(array);

*/


// 2.2 ) Pop
/*
let array = ['Hello','Class', 
             'JavaScript'];
console.log("original array befor pop",array);             
 let lastElement = array.pop();
 console.log(lastElement);
 console.log(array)
*/
// 2.3 ) Index of
/*
let array = ['Hello','Class', 
             'JavaScript'];


console.log(array.indexOf('Hello'));


// 2.4 )  include 

console.log("Check if Javascript is in Array", array.includes("JavaScript"));
console.log("Check if React is in Array", array.includes("react"));

*/
// 2.5 ) for Each 
/*
let array6 = ["React", "CPP", "JavaScript"];

array6.forEach(function (element , Index) {
    console.log(element,Index)
});


array6.forEach(element => {
    console.log(element + " Hellow")
});

*/

// 2.6  map
/*
let oldArray = [1, 2, 3, 4, 5];
 
console.log(oldArray);
 
let newArray = oldArray.map(function (element) {
    return element * 5;
    
});

let listingarray = [
    {name:"product1",proce:"100",ImageURL: "http:...",description:{color:"red",size:"5inch",batary:"5000mh"} },
    {name:"product1",proce:"100",ImageURL: "http:...",description:{color:"red",size:"5inch",batary:"5000mh"} },
    {name:"product1",proce:"100",ImageURL: "http:...",description:{color:"red",size:"5inch",batary:"5000mh"} },
]
let listingUIArray = listingarray.map(function (element) {
    return "<div class:listingCSSClass >"+element.name  +"</div>"
    
});

console.log("listingUIArray :: ",listingUIArray)

 
console.log(newArray);

*/

// Javascript reducer 

let oldArray = [1, 2, 3, 4, 5];
 
console.log(oldArray);
 
let sumOfElements = oldArray.reduce(
    function (accumulator, element) {
        return accumulator + element;
    });
 
console.log(sumOfElements);


// 2.7 Filter
/*
let oldArray = [1, 2, 3, 4, 5];
 
console.log(oldArray);
 
let newArray = oldArray.filter(function (element) {
    return element % 2 === 0;
});
 
console.log(newArray);
*/