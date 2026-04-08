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



//************************************/

//there are two types of memory
//stack , Heap
// stack is used in all primitive datatypes(jo bhi apne var declare kiya hai uska apko "copy milta hai")
// and heap is used in all the non-primitive datatypes (and in heap hamye refernce milta hai means original value)

let myName = "vimcoo"
let anothername = myName
anothername = "shicoo"

console.log(myName);
console.log(anothername);//here the value got change bcz it copied the value(call by value)


let userone = {
    email : "paglu@google.com",
    nickname : "lala",
}

let usersecond = userone 

userone.email = "dablu@google.com";
console.log(usersecond.email);//here the value got change bcz it took call by refernce

//######
