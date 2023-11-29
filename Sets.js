// Sets in javascript are define as colection of unique values , vlaues can be premitive or object
// set can be initialise as  New Set()
// elements can be added with the help of add methods
// set length can be check woth size  
// itegrating sets 

// cpmparing with array and string or converting array and string to Set

// for of

let set1 = new Set()
for (const item in set1){
    console.log(item)
}

// keys , entires , values
// set1.map()

set1.add(1)
set1.add(2)
set1.add(3)
set1.forEach(element => {
    console.log(element)
});

