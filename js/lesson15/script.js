//  IIFE => immidietely invoked function expression

// (() => {
//   console.log("hello");
// })();

// /////////////////

// (function () {
//   console.log("hello java");
// })();

// // ///////////////////

// (function myIIFE() {
//   console.log("hello Fozil");
// })();

// (function () {
//   function example() {
//     console.log("hello java");
//   }
//   example();
// })();

// prototype

// const user = {
//   firstname: "Fozil",
//   lastname: "Khudoyberdiev",
//   greeting() {
//     console.log("hello");
//   },
// };

// const num = 10;
// const num = new Number(100);

// const str = 'example';

// const str = new String("example");
// console.log(str);

// const example = Object.create(user)

// const user2 = {};

// Object.prototype.getAge = function(){
// console.log('i am 28 years old');

// }
// const user2 = [];

// Array.prototype.example = function(){
// console.log('i am 28 years old');
// }

// console.log(user2.example())

// OOP => object oriented programming
// PP => functional programming
// class => ES6da qo'shilgan

// function User(name) {
//   this.name = name;
// }
// let user = new User('Fozil')

// console.log(user.name);
// console.log(typeof user);

class User {

  constructor(name){
this.name = name;
  }
  greeting(){
    console.log(this.name);

  }
}
let user = new User('Fozil');

user.greeting();