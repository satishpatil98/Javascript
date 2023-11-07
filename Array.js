//1 )  Array declaration 
// 2 ) IMP methods 
// 2.1 ) Push 
/*

let array = ['Hello','Class', 
             'JavaScript'];
array.push('React');
console.log(array);
*/
// 2.2 ) Pop
/*
let array = ['Hello','Class', 
             'JavaScript'];
 let lastElement = array.pop();
 console.log(lastElement);
 console.log(array)
*/
// 2.3 ) Index of
/*
console.log(array.indexOf('Hello'));
*/

// 2.4 )  include 
/*
console.log(array.includes("JavaScript"));
*/

// 2.5 ) for Each 
/*
let array = ["Hello", "world", "JavaScript"];
array.forEach(function (element , Index) {
    console.log(element,Index)
});


array.forEach(element => {
    console.log(element)
});

*/

// 2.6  map
/*
let oldArray = [1, 2, 3, 4, 5];
 
console.log(oldArray);
 
let newArray = oldArray.map(function (element) {
    return element * 5;
});
 
console.log(newArray);

*/

// Javascript reducer 
/*
let oldArray = [1, 2, 3, 4, 5];
 
console.log(oldArray);
 
let sumOfElements = oldArray.reduce(
    function (accumulator, element) {
        return accumulator + element;
    });
 
console.log(sumOfElements);
*/

// 2.7 Filter
/*
let oldArray = [1, 2, 3, 4, 5];
 
console.log(oldArray);
 
let newArray = oldArray.filter(function (element) {
    return element % 2 === 0;
});
 
console.log(newArray);
*/