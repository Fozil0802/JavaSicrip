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
let user = {
  name: "jon",
  sayHi: function (status, age) {
    console.log(this.surname, status, age);
    // console.log(this);
  },
};

let user2 = {
  surname: "Doe",
  id: 1,
};

user.sayHi.bind(user2, 'developer', 28)();
let binding = user.sayHi.bind(user2, 'developer', 28);
binding();
