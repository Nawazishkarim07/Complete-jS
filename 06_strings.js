let name = "Nawazish"
let repoCount = 50
console.log(`Hey my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Pheonix the legend")
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName.slice(-8,4))
console.log(gameName.substring(0,4))
let city = "         Noida      "
console.log(city.trim())    // it removes extra whitespaces...
let url = "https://nawazish%20Karim.com" 
console.log(url.replace('%20','-'))  // it replaces the value...

console.log(url.includes('naw'))
console.log(gameName.split(" "))