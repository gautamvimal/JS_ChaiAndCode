//singleton = const tinderUser = new Object()
const tinderUser = {}//lieral

tinderUser.id = "123abc"
tinderUser.name = "Vimal"
tinderUser.isLoogedIn = false

console.log(tinderUser);

 
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "vim",
            lastName: "gtm"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);



const obj1 = {1:"a",2:"b"}
const obj2 = {2:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = {obj1 , obj2}
// console.log(obj4);
// const obj4 = Object.assign({},obj1,obj2,obj3)//we won't use this much too
// console.log(obj4);
const obj4 = {...obj1,...obj2,...obj3}//with using separtors **mostly use
console.log(obj4);