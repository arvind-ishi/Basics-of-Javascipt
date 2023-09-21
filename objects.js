// const numberObj = new Number(1);
// console.log(typeof numberObj); // "object"
// 
// const bigintObj = Object(1n);
// console.log(typeof bigintObj); // "object"
// 
// const symbolObj = Object(Symbol("foo"));
// console.log(typeof symbolObj); // "object"
// 
// 
// const b = new Object(undefined);
// console.log(b);
// 
// 
// 
// const o = new Object();
// 
// console.log(o);
// 
// const  a = new Object(null);
// 
// console.log(a);
// 
// 
// 
// 
// class Dog {
    // constructor(name, breed, color, sex) {
    //   this.name = name;
    //   this.breed = breed;
    //   this.color = color;
    //   this.sex = sex;
    // }
//   }
//   
// 
// 
//   const arr = [1, 2, 3];
// 
// arr.toString(); // "1,2,3"
// Object.prototype.toString.call(arr); // "[object Array]"
// 
// 



//00000000002222222222222222222222222222222 this is strating ????????????????????

const jsUser = {
 name :"arvind",
 email :" avij70507@gmail.com ",
 phonenumber : 8007195696,
 accunt : true,
 "full name" : "arvind jadhav"


}


console.log(jsUser["name"]);

console.log(jsUser.name);
console.log(jsUser.email);

console.log(jsUser["full name"]);

console.log(jsUser);



/////////////////>>>>>>>>>>>>>>symbol>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>i

let mysym = Symbol("key1");

const jsWser = {
    see : "garbage 0",
    constact : "avi",
    hospital : 33,
    unick : true ,
    [mysym] : "mykey1",


}

console.log(jsWser);
console.log(jsWser[mysym]);
console.log(typeof jsWser[mysym]);



////////>>>>how to chage the value in objects <<<<<<<<<<<<<<<<<>>>>>>>>

jsWser.constact = " this is the avi";

console.log(jsWser.constact)

Object.freeze(jsUser);
jsUser.name = ' avi';
console.log(jsUser);




jsUser.greeting = function(){
    console.log("arvind jadhav in way");
}


console.log(jsUser.greeting);