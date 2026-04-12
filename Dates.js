let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());



console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023,0,23);
let myCreatedDate = new Date(2023,0,23,5,3);
// console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();// time in milisecond
console.log(timeStamp);
console.log(myCreatedDate.getTime());//covert date into milisecond

console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getDate());


