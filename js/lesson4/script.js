// console.log(5 === '5');
// console.log( 5 == '5');

// === => switch
// == => if else

// nulish operator

// const data1 = undefined ?? 'malumot kelmadi';
// const data2 = null ?? 'malumot kelmadi';
// const data3 = undefined ?? {};

// console.log(data3);

// for loop qayta qayta ko'dni yozish uchun kerak

// for (let index = 1; index < 10; index++){

//     console.log(index);
// }

// for (let index = -1; index < 1; index++){

//     console.log('Hello JavaScript');
// }

// let num =5;
// for(i = 1; i <= num; i++){
//     console.log(i);
// }

// for(let i = 1; i <= 5; i++){
// }
// console.log(i);
// javop:ReferenceError: i is not defined (block scope)

// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }
// natija:1 2 3 4 5 ;

// for(var i = 1; i <= 5; i++){
// }
// console.log(i);
// natija:6(global scope)

// for(let i = 1; i >0; i++){
//     console.log(i);
// }
// natija:infinitive

// for(let i = 5; i >= 0; i--){
//     console.log(i);
// }
// natija:3 2 1

// for(let i = 2; i<=7; i++){
//     if(i %2 ===0){
//         console.log(i, 'juft son');
//     }else{console.log(i, 'toq son');}
// }

// let str = 'hello';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);

// let str = 'hello'
// for(let i = 0; i <5; i++){
//     console.log(str[i]);
// }

// let str = 'hellojacascript'
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// let str = 'jsvascript';
// console.log(str.length);

// salom=> molas
// let str = 'salom'
//  for(let i = str.length; 1>=0; i++){
//     console.log(str[i]);
//  }
//  natija;
//  undefined m o l a s

// let str = 'salom'
//  for(let i = str.length -1; 1>=0; i++){
//     console.log(str[i]);
//  }
//  natija; m o l a s
// lenght => 0,1,2 ...
// index => 1,2,3 ....

// let str = "world";
// let newstr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   // newstr += str[i]=>
//   newstr = newstr + str[i];
// }
// console.log(newstr);