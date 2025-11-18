// /* 
//     ******************************** PRIMITIVE DATA TYPE *********************************
//     - NUMBER
//     - BOOLEAN
//     - BIGINT
//     - STRING
//     - NULL
//     - UNDEFINED
//     - SYMBOL

//     ******************************** NON PRIMITVE TYPE (REFRENCE TYPE) ******************************
//      - ARRAY
//      - OBJECT
//      - FUNCTION

// */

// let id = Symbol("123")
// let anotherId = Symbol("123")   // Symbol will always give unique value even if the input is same..

// let BigNumber = 43424442423445930n   // with n in the last it becomes BIGINT..

// // Arrays - 

// const heroes = ["Ironman", "Captain America", "Thor" ]

// // Objects - 
// const MyObj = {
//     Name: "Nawazish",
//     Age: 22,
//     City: "Greater Noida"
// }

// // Function - 
// let myFunction = function(){
//     console.log("Hello World")
// }

// console.log(typeof BigNumber );


//. +++++++++++++++++++ MEMORY IN JAVASCRIPT +++++++++++++++++++++++++++++

// STACK - Primitive data type .......returns the copy of the original
// HEAP - Non Primitive data type ...... returns the original refernce

// let myCollege = "NIET"
// let ClgName = myCollege
// ClgName = "IIT"
// console.log(ClgName);
// console.log(myCollege);

let user = {
    name: "Nawazish",
    email: "nawazish@xyz.com"
}
let userTwo = user;
userTwo.email = "nawazish@gmail.com";
console.log(user.email)  // dosnt get changed because heap returns original refernce
console.log(userTwo.email)  // dosnt get changed because heap returns original refernce
