// const marver_heroes = ["thor","ironman","captain","spiderman"];
// const dc_heroes = ["superman","batman","flash"]

// const allHeroes = marver_heroes.concat(dc_heroes);      // merged two arrays and returns a new array..
// console.log(allHeroes);

// const all_new_heroes = [...marver_heroes, ...dc_heroes]     // merged the arrays more preffered and also can merge more than two arrays unlike concat..

// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5],6,[7,8,[9,10]]];
// const real_another_array = another_array.flat(Infinity)     // we can add the depth of the array to be flattern like 1,2,3 and also infinity..
// console.log(real_another_array);


// console.log(Array.isArray("Nawazish"));     // checks wether given parameter is array or not..
// console.log(Array.from("Nawazish"))         // converts the parameter fien to array..

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1,score2,score3,score4));         // makes array from set of different variables..
