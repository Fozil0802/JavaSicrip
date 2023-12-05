// this => call, apply, bind
// call
// let user = {
//   name: "jon",
//   sayHi: function (age, status) {
//     // console.log(this.surname);
//     console.log(this.surname, age, status);
//   },
// };

// let user2 = {
//   surname: "Doe",
//   id: 1,
// };

// user.sayHi.call(user2, 25, "Mentor");

// apply

// let user = {
//   name: "jon",
//   sayHi: function (status, age) {
//     console.log(this.surname, status, age);
//     // console.log(this);
//   },
// };

// let user2 = {
//   surname: "Doe",
//   id: 1,
// };

// user.sayHi.apply(user2, ['developer', 28]);

// bint

// let user = {
//   name: "jon",
//   sayHi: function (status, age) {
//     console.log(this.surname, status, age);
//     // console.log(this);
//   },
// };

// let user2 = {
//   surname: "Doe",
//   id: 1,
// };

// user.sayHi.bind(user2, 'developer', 28)();
// let binding = user.sayHi.bind(user2, 'developer', 28);
// binding();

// scope
//  global=> var
// function=> var, let, const
// block => let, const

// const num1 = 5;
// console.log(num1);

// // local variable
// function check(){
//   var num1 = 10;
//   console.log(num1);
// }

// console.log(num1);
// check();
// console.log(num1);

// function check() {
//   if (true) {          
//     var a = "Javascript";
//     let b = "React";
//     const c = "anguler";
//   }
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// //  block scope => {}, if/else, for, do, do while lops