const arr = [1,2,3,4,5,6,7,8,9]
//const newArr = arr.map((num)=> num+10)
const newArr = arr.map((nums)=>nums+10).map((nums)=>nums-12).filter((nums)=>nums>0)
console.log(newArr);
