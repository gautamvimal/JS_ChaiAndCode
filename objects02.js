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


const user = [
    {
        id:1,
        name:"v"
    },
    {
        id:2,
        name:"i"
    },
    {
        id:3,
        name:"m"
    },
    {
        id:4,
        name:"a"
    }
]

console.log(user[1].name);


console.log(Object.keys(tinderUser));//here its reslut is in array [ 'id', 'name', 'isLoogedIn' ]
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoogedIn'));
