let score = "50abc";
console.log(typeof score);
let conversion = Number(score)
console.log(typeof conversion);
console.log(conversion); // NaN (not a number so jab bhi iski value dekhye tho dhyan se dkhye)


let isLoggedIn = "vim"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//1 => true; 0 => flase
//"" => false
// "vim" => true 


//**********************Operations****************/


let value = 3
let negValue = -value;
console.log(negValue);

console.log("1" + 2);// concatinated as string
console.log(1 + "2");// concatinated as string
console.log("1" + 2 + 2);// concatinated as string
console.log(1 + 2 + "2");//added first then concatinated as string

console.log(+true);
console.log(+"");



