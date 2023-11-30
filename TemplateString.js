// used to format the string 
// also called Template litral or Template string ,

//Syntax
/*
`string text line 1
 string text line 2`

`string text ${expression} string text`

*/


const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}


const output = myTag`That ${person} is a ${age}.`;

console.log(output);



