// const arr = [1,2,3,4,5]
// for(const nums of arr){
//     console.log(nums)
// }

// const greeting = "Hello world"
// for( const greet of greeting){
//     if(greet==" ") continue;
//     console.log(`${greet}`)
// }

// ******************************** MAPS ***********************************

// const map = new Map()
// map.set("IN","India")
// map.set("USA","United States of America")
// map.set("Fr","France")
// for(const [key,value] of map){          // doesnt work for objects..
//     console.log(key, ":-", value)
// }

// const myObject = {
//     js:"javascript",
//     cpp:"C++",
//     rb:"rubie",
//     swift:"swift by apple"
// }
// for(const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }

// const arr = ['js','cpp','java']
// for(const key in arr){              // for in loop have syntax like this..
//     console.log(arr[key]);
    
// }

// const coding = ['cpp','java','js','python']
// coding.forEach(function (item){     //builtin method for array...
//     console.log(item)
// })
const myCoding = [
    {
        languagename:"javascript",
        languageFile:"js"
    },
    {
        languagename:"java",
        languageFile:"java"
    },
    {
        languagename:"python",
        languageFile:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languagename);
    
})