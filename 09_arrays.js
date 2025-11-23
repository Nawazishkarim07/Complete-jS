// arrays
// const array = [0,1,"hero",3,4]; //it can contain different ds also unlike java..
// console.log(array[2])

const arr = new Array(0,1,2,3,4,5);       // another way of creating it...
// console.log(arr[3]);

arr.push(6);        // insert at the last position if the array..
//console.log(arr)
arr.pop()       //removes the last element of the array..
//console.log(arr)
arr.unshift("Start");       //insert at the first postion of the array..
// console.log(arr);
arr.shift();        // removes the first element of the array..
// console.log(arr)
// console.log(arr.includes(100));      //checks wether the elemwnt is present in the array..
const  newArr = arr.join();     //converts the array into string..(comma seperated)
// console.log(newArr);
// console.log(typeof newArr);

const arr1 = arr.slice(1,3);        // It doesnpt change the original array..
console.log("OG: ", arr);
console.log("Sliced: ",arr1);
console.log("OG: ",arr)
const arr2 = arr.splice(1,3);
console.log("Spliced",arr2)     // It changes the original array..and it also includes range..
console.log("OG after splicing",arr)


