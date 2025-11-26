// // const tinderUser = new Object();         // Singleton object

// const tinderUser = {}               // Non singleton object..
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false;
// // console.log(tinderUser)

// const obj1 = {1:'a', 2:'b'}
// const obj2 = {3:'c', 4:'d'}

// // const obj3 = {obj1, obj2}
// // console.log(obj3)

// // const obj3 = Object.assign({}, obj1, obj2);
// const obj3 = {...obj1,...obj2}      // latest method and convinient..
// console.log(obj3)

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))        //returns a boolean

const course = {
    courseName : "Complete Js",
    courseFee : 999,
    courseInstructor : "Hitesh"
}
// course.courseInstructor      //instead of that we use

const {courseInstructor: instructor} = course;      // this is destructuring the object..
// console.log((courseInstructor));     
console.log(instructor);
