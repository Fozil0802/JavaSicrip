// this keyword

// let obj = {
//   name: "webbrain",
//   age: 27,
//   status: "student",
//   info: function () {
//     // arrow functionda this keyword mavjud emas!!!
//     // console.log(`${this.name} ${this.age} ${this.status} years old`);
//     console.log(this);
//   },
// };
// obj.info();

// // array + object

// let arr = [
//   100,
//   "hello",
//   null,
//   undefined,
//   { name: "example" },
//   function () {},
//   false,
//   95,
// ];
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

// //

// // let arr1=[5];
// // let arr2= new Array(5)
// let arr1 = [5, 7];
// let arr2 = new Array(5, 11);

// console.log(arr1.length);
// console.log(arr2.length);

// let arr3 = [];

// arr3[1] = "fozil";
// arr3[3] = 95;
// console.log(typeof arr3);
// console.log(Array.isArray(arr3));

// Array methods

let arr4 = ["hello", 'fozil', 'sirojiddin'];
let arr5 = "world";

// console.log(arr4.join(" "));
// console.log(arr4.concat(arr5, "fozil"));
// console.log(arr4.slice(0,3));
// console.log(arr4.splice(0,2));

// arr4.slice(0, 2); result:[ 'hello', 'fosil', 'sirojiddin' ] asosiy arrayga tasir qilmeydi, ctrl + c
// arr4.splice(0, 2) result: [ 'sirojiddin' ] asosiy arrayga tasir qiladi, ctrl + x
// console.log(arr4);

console.log(arr5.split(' '));
console.log(arr4.reverse());

console.log(typeof arr5.split('').reverse().join());

let arr = [123456789];
console.log(+arr.toString().split('').reverse().join(''));


