// const nums = [1,2,3]
// const myTotal = nums.reduce((acc,currVal)=>{
//     console.log(`Acc is ${acc} and curr val is ${currVal}`);
//     return acc+currVal
// },0)
// console.log(myTotal);


const cart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "python course",
        price: 5999
    },
    {
        course: "mobile dev course",
        price: 8999
    },
    {
        course: "Data Science course",
        price: 12999
    },
    
]

const cartTotal = cart.reduce((acc,item)=> acc+item.price,0)
console.log(cartTotal);
