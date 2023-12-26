// JSON => javascript object notation

/////////////////////////////////////////////////////

// IIFE => immidiately invoked function expression => ikta js faylda bir xil nom bilan function yozilib qolsa, IIFE ga uraymiz va alohida scope xosil qilib beradi, va bir biriga tasir qilmaydi.

// (function () {
//     console.log('Salom xammaga!');
// })();

/////////////////////////////

// (function myIIFE() {
//     console.log("Salom xammaga!");
// })();

//////////////////////

// ((name) => {
//     console.log('Salom xammaga!', name);
// })("Test");

// ///////////////////////////////////////////////////////////////////////////

// pure vs impure function
// pure function xususiyatlari => Predictable, Readable, Reusable, Testable
// Predictable => the same input, the same output

// pure => tawqi tasir yuq
// function sayGreeting(name) {
//     return `Hello ${name}`
// }

// console.log(sayGreeting('John'));

///////////////////////////

// impure => tawqi tasir bor
// let greeting = 'Salom xamma!';

// function sayGreeting(name) {
//     return `${greeting} ${name}`
// }

// console.log(sayGreeting('John'));

////////////////////////////////////////////////////////////////////////////////////

// Higher order function(map(), filter(),forEach()...) => biror bir function parametr sifatida boshqa bir functionni qabul qilishi

// const num = [1, 2, 3, 4, 5];
// [2, 3, 4, 5, 6]

// num.forEach((value) => console.log(value + 1));
// num.forEach(function (value) {
//     console.log(value + 1)
// });

//////////////////////////////////////

// Callback function => Higher ordered function da parametr sifatida keladigan function
// map(()=> {});
// map(function(){});

// /////////////////////////////////////////////////////////////////////

// prototype

// const user = {
//     name: 'Shaxboz',
//     lastName: 'Yaxyoyev',
    
//     greeting() {
//         console.log('Xammaga Salom!');
//     }
// }

// Object.prototype.getStatus = function(){
//     console.log('Men dasturchiman!');
// }

///////////////////////////////////////////////

// Array.prototype.getAge = function () {
//     console.log('Yoshim 25 da');
// }

// ///////////////////////////////////////////////////////////////////

// Number.prototype.getSum = function (a, b) {
//     return a + b
// }

// let num = 100;
// let num = new Number(100);
// console.log(num.getSum(10, 10));

// ////////////////////////////////////////////////////////////////////////////////

// String.prototype.getName = function () {
//     console.log('Mening ismim John!');
// }

// let str = 'Webbrain';
// let str = new String('Webbrain!');
