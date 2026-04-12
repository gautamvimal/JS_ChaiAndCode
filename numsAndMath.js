const score = 400;//number
console.log(score);


const blance = new Number(500);//object
console.log(blance);
console.log(typeof(blance));
console.log(typeof(score));

console.log(blance.toString().length);
console.log(blance.toFixed(3));

const otherNumber = 123.89;
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3));


const hunders = 1000000;
console.log(hunders.toLocaleString('en-IN'));



// +++++++++++++++++++++Maths++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));



console.log(Math.random());//give value bwt 0 and 1
console.log((Math.random()*10)+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1) +min));//gives val bwt 10 to 20
