const strNAme = "vim";
const othername = 'shib';

console.log("hello" + strNAme + othername );

console.log(`hello my name is ${strNAme} and my another name is ${othername}`);  //string interpolation

const gameName = new String('frostborn');
console.log(gameName);
console.log(gameName[0]);//shift+alt+up/down-arrow

console.log(gameName.__proto__);

console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   vim    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vim.com/vim%20gtm";
console.log(url.replace('%20',' '));




