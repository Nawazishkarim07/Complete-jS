// OBJECT LITERALS..




const mysym = Symbol("123key")

const user = {
    name: "Nawazish Karim",
    age: 22,
    [mysym] : "123key"
}
// console.log(user[mysym])
// console.log(user['name'])       //can be accessed only wen used with " " in the [ ]
// user.age = 23;      //can modify the values in the object..
// Object.freeze(user)         // we can freeze the object so taht its value cant be modified..
// user.age = 21       // it didnt change the value as the object is freezed.. but also wont thorw any error..
// console.log(user)

user.greeting = function(){
    console.log(`Hello ${user.name}`)
}

user.greeting()