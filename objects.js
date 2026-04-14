//we can create objects in two ways 1. like Literal 2. using constructor
//Singleton : made by constructor


//object literals

const mySys = Symbol("key1");
const jsUser = {
    name:"vimal",
    age:20,
    loc:"mumbai",
    lastLog:["mon","sat"],
    "full Name":"vimalGAutam",
    // mySys: "myKeyVal",
    [mySys]: "mykeyvzl"
}

console.log(jsUser.loc);
console.log(jsUser["loc"]);

console.log(jsUser["full Name"]);
// console.log(jsUser.full Name);//not allowed , it will show error.

// console.log(jsUser.mySys);//here it is printing but its datatype is string here insted of symbol.
// console.log(typeof jsUser.mySys);//string
console.log(jsUser[mySys]);
console.log(typeof jsUser[mySys]);//string

// console.log(mySys);//here it shows value of mysys is 
// symbol(key1)


jsUser.age = 25;
// Object.freeze(jsUser);
jsUser.age = 29;
console.log(jsUser);//value of age is 25 not 29 bcz we freeze the object


//adding function in object
jsUser.greeting = function(){
    console.log("hello konichiwa");
    
}
console.log(jsUser.greeting);//function(anonymous)
console.log(jsUser.greeting());//hello konichiwa and\n undefined



jsUser.greeting2 = function(){
    console.log(`hello how r ya ${this.name}`);
    
}
console.log(jsUser.greeting2());
