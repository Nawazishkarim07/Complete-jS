let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

let createdDate = new Date(2023,0,12,5,3)
console.log(createdDate.toLocaleString());
let mytimeStamp = Date.now()    // it gives timestamp in non readable format
console.log(mytimeStamp.toLocaleString())
