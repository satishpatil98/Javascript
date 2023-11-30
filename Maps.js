// Map can hold key value pairs 

// Map is created with new Map();
// elements or key vlaye paise can be add using set("key","value") function
// Element can be access using get("key Name") method
// get count by size property of map onject 
// delete with delete(keyname) method
// objects are collections of key-value pairs
//A key in the Map may only occur once; it is unique in the Map's collection
//



const map1 = new Map();
map1.set('a', 1);
map1.set('b', 2);
map1.set('a', 11);
map1.set('b', 22);
map1.set('c', 33);

//console.log(map1)
console.log(map1.get('a'));




