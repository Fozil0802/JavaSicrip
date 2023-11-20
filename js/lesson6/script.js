// console.log(Math.pow(3, 3)); sonni darajaga ko'taradi 

// console.log(Math.sqrt(36)); ildiz chiqaradi

// console.log(Math.cbrt(64));kub ildiz ichidan chiqaradi

// console.log(Math.max(10, 4, 37));maxni tanlaydi

// console.log(Math.min(10, 4, 37));minni tanlaydi

// console.log(Math.abs(-10));musbat qiladi

// console.log(parseInt(Math.random() * 10));tasadifan

// console.log(Math.round(5.45));yaxlitlash

// console.log(Math.floor(5.999));butun qismini oladi

// console.log(Math.ceil(4.2));qoldiq bo'lsa bo'ldi 1 qo'shadi


// function => block of code

// types => declaration, expression(anonyymos), arrow function
 
// declaration
 
// example(); 
// function example() {
//     console.log('hey');
// }
// invoking or calling a faction
// hoisting bo'ladi

// function example() {
//     return  'salom';
// }
// console.log(example());

// ============

// function  expression(anonyymos)
 
// example();
// let example = function(){
//     console.log('salom');
// }

//  arrow function

// example();
// let example = () => {
//     console.log('hello');
// }

// avto return arrow fanction


// let example = () => 
//     'hello'

// console.log(example());

// ============================

// parametr / argument

// function person(ism, yosh) {
//    console.log('Hello ' + ism + ' ' + yosh); 
// }
// person('Fozil' , 28)
// person('Jaloliddin' , 29 )
// person('Jigar' ,30)

// function person(ism = 'default ism'){
//    console.log('ismi: ' + ism);
// }
// person()