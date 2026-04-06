//primitive (they all are call by value)
//7 types: String,Number,Boolean,null,undefined,symbol,BigInt


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId); // return values are different

const bigNumber = 2323423423423423423n//use n to make big int


//Non primitve (call by reference)
//Array, objects, Functions

const heros = ["ironman", "spiderman", "batman"] // array
let myObj = {
    name: "vim",
    age: 22,
}//object

const myFunction = function(){
    console.log("Hello World");
}


//https://262.ecma-international.org/5.1/#sec-11.4.3
