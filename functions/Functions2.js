// Dirreferent types of functions :
// 1 )  Simple fuction  -- Covered 
// 2 ) Arrow function --- Covered 
// 3 ) Anonymous Function : function declared without its name 
// 4 ) Constructor Functions : used to create the object 



// Anonymous Function

 /* let myfunction = function () {
    console.log("Welcome to Javascript");
  };

  myfunction() /// () operator used to invoke / call a function 
*/

/*
  // Trace the oputput 
  (function () {
    console.log("Welcome to Javascript 2");
  })(); // 

*/

  // 4 )  Constructor functions  {property1:value1 , property2:value2}

  // Use new key word to create function object  or object 


  
  function Person (){
    this.name="Kumar" // Property name
    this.lastname="varma" // Property lastname
    this.fullname = function (){ // property fullname  function property 
        console.log("inside function :: ",this.name + " " + this.lastname)
        return  this.name + " " + this.lastname
    }
  }

 // console.log("type of Person function ::", typeof Person);
  const objPerson1 = new Person()  // Creating function object 
  /*
  console.log("type of objPerson1 :: ", typeof objPerson1);
console.log ( "access name property --",objPerson1.name)

console.log ( "access lastname property -- ",objPerson1.lastname)

console.log ( "access fullname property -- ",objPerson1.fullname())
*/
/*
objPerson1.address = "pune" // Add new address property in objPersopn1 

//console.log("objPerson1.address ::- ",objPerson1.address)
console.log("object ",objPerson1)

  
  let functionAssignement = Person 

  //console.log("type of functionAssignement :: ", typeof functionAssignement);



  /// Use case  post login api : return user details , fn .ln , address , banck account , banck name 

// user ( name ,last name), account ( accnumber , banck name , type )

objPerson1.accountnumber = "231312312312"

*/
//objPerson1 



/*



  // access property 
  console.log(objPerson1.name)
  console.log(objPerson1.lastname)
  // access function 
  objPerson1.fullname()
*/



// Rest parameters

// function to add numbers , 2 , 3 , 4 , 5 , 6 .... 100


//1 ) add 2 ,3, 4 , 5  fun 1
// 2 ) add 1,3,4,5,6,6,7 fun2 

// 3 ) add 1,3,4,5,6,6,7 , 57,78,78 , [123, 1234] fun 3 
// 4 ) .....  


// same type of parameters  

function sum(...theArgs) {
    let total = 0;
    console.log("type of theArgs", typeof theArgs)

    for (const arg of theArgs) {  /// for of  , itterables , array and objects , (String pls check)
      total += arg; // +=  is same as total = total + arg
    console.log (typeof total )
    }
  console.log (typeof total )
    return total;
  }

  console.log(sum(1, 2, 3, 4, 5 ,[6,7,8]));
  //15 + 6 + 7 +8 ==


  // "5" -- > Number 
  // [5,6,7] --> number ??  

  // hint :  find the type of arg and then deice ur code logic.  


  
  //console.log(sum(1, 2, 3));
  // Expected output: 6
  
  //console.log(sum(1, 2, 3, 4, 5));
  // Expected output: 10

  

  

  



