const myArray = [0,1,2,3,4,5,5];

const myArray1 = new Array(1,2,3,4,5);
console.log(myArray1[2]);


//Arrays Methods
myArray1.push(6);
console.log(myArray1);
myArray1.pop();
console.log(myArray1);


myArray1.unshift(9);//shift the value at 0th index
console.log(myArray1);
myArray1.shift();// remove the value of 0th index
console.log(myArray1);


console.log(myArray1.includes(9));
console.log(myArray1.indexOf(3));//
console.log(myArray1.indexOf(8));//gives -1 bcz index don't exist


const newarr = myArray1.join();//combine and convert to string 
console.log(myArray1);
console.log(newarr);
console.log(typeof newarr);


//slice and splice
console.log("A ", myArray1);

const myn1 = myArray1.slice(1,3);
console.log(myn1);
console.log("B",myArray1);

const myn2 = myArray1.splice(1,3);
console.log("C ",myArray1);
console.log(myn2);

//slice do not manipulate the real array
// but splice change the real array .

