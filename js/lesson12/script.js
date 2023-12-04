// this => call, apply, bind

let user = {
  name: "Example",
  sayHi: function () {
    console.log(this);
  },
};
user.sayHi();
