// for(let i=0;i<10;i++){
//     const element = i;
//     console.log(element);
    
// }

// for(let i=0;i<5;i++){
//     console.log(`value of outer loop ${i}`)
//     for(let j=0;j<5;j++){
//         console.log(`value of innerloop ${j} and value of outerloop ${i}`);
        
//     }
// }

// break and continue..

// for (let i=1;i<=20;i++){
//     if(i==5){
//         console.log(`Detected 5`);
//         // break;                   // it breaks the loop
//         continue;                   // it skips the value..
        
//     }
//     console.log(`the value of i is${i}`);
    
// }


// ******************************** WHILE LOOP *******************************

// let i = 0;
// while(i<=10){
//     console.log(`the value of i is ${i}`);
//     i = i+2
// }

// const myArray = ['batman','superman','flash']
// let i = 0;
// while(i<myArray.length){
//     console.log(myArray[i])
//     i++;
// }

// ******************************* DO WHILE LOOP ***********************************
// it executes first then checks the condition so the loop will run atleast 1 time..
let i = 11;
do{
    console.log(`the value of i is ${i}`);
    i++;
} while(i<=10);