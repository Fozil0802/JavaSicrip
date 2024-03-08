// //  KARAKARA
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }

//   console.log("==================");
// }

// // juft va toq son
//  let num= 15; 
// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }
// console.log(evenOrOdd(num));
// //  3-masala
// let arr = [1, -4, 7, 12];
// function positiveSum(arr) {
//   let newsum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       newsum += arr[i];
//     }
//   }
// return newsum
// }

// console.log(positiveSum(arr));

// // 4-masala

// let str = "world";

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// solution(str); 

// // 5-masala

// let number = 12;
// function opposite(number) {
//   return number * -1;
// }

// console.log(opposite(number));

// // 6-masala
// let num = 123;
// function numb(num) {
//   return num.toString();
// }
// console.log(numb(typeof "num"));

// // 7-masala

// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

// console.log(boolToWord());

// // 8-masala

// let str = "world";

// function solution(str) {
//   return str.split("").reverse().join("");
// }
// console.log(solution(str));

// 9 - masala

let str1 = "1, 2, 3, 4, 5";

function removeChar(str1) {
  return str1.substring(1, str1.length - 1);
}
console.log(removeChar(str1));

// 10-masala

let numbers = [1, 2, 3, 4];

function squareSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] ** 2;
  }
  return result;
}
console.log(squareSum(numbers));

// 11-masala ????????????????????????

// let repeat1 = "f";
// function repeatStr (n, s) {
//   return s.repeat(n);
// }
// console.log(repeatStr(repeat1));

// 12-masala

const findsum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };
  console.log(findsum(8));
  
  // 13- masala
let text = "fo zi  l shav kato  vich";

function noSpace() {
  return text.replace(/\s/g, "");
}

console.log(noSpace(text));

// 14-masala

function finder() {
  let args = [5, 3, 7, 27, 9];
  return Math.min(...args);
}
console.log(finder());

// 15-masala

// function countSheeps(arrayOfSheep) {
//   var sheepCounter = 0;

//   for (var i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i] === true) {
//       sheepCounter++;
//     }
//   }

//   return sheepCounter;
// }
// console.log(countSheeps());
// 2-usul
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }
// console.log(countSheeps());
