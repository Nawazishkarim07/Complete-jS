// ****************** DISCUSSING ABOUT (THIS) KEYWORD ********************

// const user = {
//     username: "Nawazish",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to website..`)
//         console.log(this)
//     }
    
// }
// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();
// console.log(this);


// function chai(){
//     const   username = "sam"
//     console.log(this.user)      // this gave undefined as it didnt access the username like the object.
// }
// chai()

// const chai = ()=>{
//     const username = "Sam";
//     console.log(this.username)      // also not useful in arrow function.
// }
// chai();

/******************************* ABOUT ARROW FUNCTION *************************** */

const add = (num1,num2) => (num1+num2)        // this is called implpicit return ... (no use of return keyword as func end in same line)
const addTwo = (num1,num2) => ({usrname: "Nawazish"})
console.log(addTwo(2,3));
