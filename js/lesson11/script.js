//  Array method

// let arr = ['a', 'b'];

// arr.push('c', 'd', 'e')
// arr.pop()
// arr.unshift(1, 2, 3)
// arr.shift()

// console.log(arr);

// let nums = [5, 2, 7, 1, 9, 10, 4, 999, 8]

// console.log(nums.sort());
// console.log(nums.sort((bir, ikki) => bir - ikki));
// console.log(nums.sort((bir, ikki) => ikki - bir));

// let arr1 = ['a', 'k', 'j', 'b', 'e','B'];
// console.log(arr1.sort());
// console.log(arr1.sort((a,b) => a.localeCompare(b)));

// let arr2 = [1, 2, 3]
// // let arr3 = [1, 2, 3]
// let arr3 = arr2;
// arr2.push('salom')
// console.log(arr2);
// // console.log(arr2 == arr3);
// console.log(arr2 === arr3);

// let num = 123456789;

// console.log(+num.toString().split().sort().join());

// let arr = ['Fozil', 'Okhunjon', 'Jaloliddin', 'Utkirbek'];
// let mapping = arr.map((value, index, array) => {
// return 'Hello Fozil'
//     // console.log(value);
// // console.log(index);
// // console.log(array);
// })
// console.log(mapping);

// map=> qiymat update qila olamiz, va return ga qaytadi

// let str = 'hello';
// str[i] => value
// i => index
// str => array

// arr.forEach((value) => {
//     console.log(value);
// }); => ! return bo'lmayapdi

// forEach=> qiymat update qila olmaymiz, va return ga qaytmaydi

// let arr = [23, 78, 95, 30, 100];
// let filtered = arr.filter((value, index) => value > 50)
// let filtered = arr.filter((value, index) => value !== 100)

// arr.map((value) => {
//   if (value < 50) {
//     console.log(value);
//   }
// });

// let arr = ["Fozil", "Okhunjon", "Jaloliddin", "Utkirbek"];
// // let filtered = arr.filter((value) => value === 'Fozil')
// let filtered = arr.filter((value) => value !== 'Fozil')
// console.log(filtered);

// let finding = arr.findIndex((value) => value === "Fozil") nechanchi index?
// console.log(finding);

// let arr = [55, 67, 23, 34];
// let sorting = cars.sort((a,b) => a.year -b.year)
// let check = arr.every((value) => value > 25) 
// let check = arr.some((value) => value > 65) 
// let filling = arr.fill('77')

// console.log(check);

let str = '5555';
// termilaida 20
// let sum = 0;

// for(let i = 0; i < str.length; i++){
// // console.log(str[i]);
// sum += +str[i]
// }
// console.log(sum);

let arr =  str.split('');
let sum = arr.reduce((initial, total) => initial + total, 0)
console.log(arr);
      
