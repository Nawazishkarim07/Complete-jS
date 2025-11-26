// // function add(num1, num2){
// //     // console.log(num1+num2);
// //     return num1+num2
// //     // console.log("sum")       // after return statement we cant write anything in the funciton...
// // }
// // add(3,4)
// // add(3,'a')
// // add(3,null)

// // const result = add(2,3)
// // console.log(result) // this gives undefined as the function doesnt return anything...after writing return it gives the result.

// function loginUserMessage(userName = "Sam"){        // we can overcome the situation of undefined by giving the function a default value..
//     if(userName===undefined){
//         console.log("please enter a username")
//         return
//     }
//     return `${userName} just logged in..`
// }
// console.log(loginUserMessage())
// console.log(loginUserMessage("Nawazish"))       //this override the default value..

function calculateCartValue(...num){            // with the help of rest operator we get all the values that will be passedas parameter in the function..
    return num;
}
//console.log(calculateCartValue(200,400,100,500));

const user = {
    name: "Nawazish",
    price: 499
}

function handleObject(anyObject){
    return `user name is ${anyObject.name} and amount spend is ${anyObject.price}`
}
// console.log(handleObject(user))

// WE CAN ALSO USE THIS FUNCTION WITHOUT ALREADY CREATING AN OBJECT LIKE THIS...    
// console.log(handleObject({
//     name:"sam",
//     price: 200
// })); 

const array = [200,300,900,100]
function handleArray(anyArray){
    return anyArray[2];
}
// console.log(handleArray(array))

console.log(handleArray([100,200,300,400]))     // again we created array during funtion call just like the object..