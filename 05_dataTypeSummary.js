/* 
    ******************************** PRIMITIVE DATA TYPE *********************************
    - NUMBER
    - BOOLEAN
    - BIGINT
    - STRING
    - NULL
    - UNDEFINED
    - SYMBOL

    ******************************** NON PRIMITVE TYPE (REFRENCE TYPE) ******************************
     - ARRAY
     - OBJECT
     - FUNCTION

*/

let id = Symbol("123")
let anotherId = Symbol("123")   // Symbol will always give unique value even if the input is same..

let BigNumber = 43424442423445930n   // with n in the last it becomes BIGINT..

// Arrays - 

const heroes = ["Ironman", "Captain America", "Thor" ]

// Objects - 
const MyObj = {
    Name: "Nawazish",
    Age: 22,
    City: "Greater Noida"
}

// Function - 
let myFunction = function(){
    console.log("Hello World")
}

console.log(typeof BigNumber );
