const marvelHeros = ["thor","ironman","spiderman"];
const dcHeros = ["batman" , "spiderman" , "hulk"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);


marvelHeros.concat(dcHeros);
// console.log(marvelHeros);

const allheros = marvelHeros.concat(dcHeros);
console.log(allheros);


//spread
const heros = [...marvelHeros,...dcHeros];
console.log(heros);//used the most


const anotherArray = [1,2,3,[4,5,6,[1,2,3]]];//array got spread out using flat keyword 
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);



console.log(Array.isArray("Vimal"));
console.log(Array.from("Vimal"));// create the array
console.log(Array.from({name: "vimal"})); // interesting case bcz it returns []empty arrray, bcz it is confused


let sc1 = 100;
let sc2 = 200;
let sc3 = 300;
console.log(Array.of(sc1,sc2,sc3));//create arrays from variable 
