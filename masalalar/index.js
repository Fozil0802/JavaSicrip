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

// 16-masala

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  // Code
  let result = 0;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      return "not a valid operator";
      break;
  }
  return result;
}

console.log(basicOp());

// 17-Masala

let year = 2101;

function century(year) {
  // 1-usul
  //   let centuryCount = 0;
  // while (year > 0){
  //   year = year - 100;
  //   centuryCount = centuryCount + 1;
  // }
  // return centuryCount;
  // 2-usul
  return Math.ceil(year / 100);
}
console.log(century(year));

// 18-maslala

// time 3=> liter= 1
// time 6.7=> liter= 3

let time = 3;

function litres(time) {
  return Math.floor(time / 2);
  // Math.floor(time*0.5)
}

console.log(litres(time));

// 19-masala

let n = 12345;

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
console.log(digitize(n));

// 20-masala

let num1 = 12;
/*n sonining ikkita x VA y soniga bo‘linishini tekshiradigan isDivisible(n, x, y) funksiyasini yarating.
Barcha kirishlar ijobiy, nolga teng bo'lmagan raqam.
Example:
isDivisible(3,1,3)--> true because 3 is divisible by 1 and 3
isDivisible(12,2,6)--> true because 12 is divisible by 2 and 6
isDivisible(100,5,3)--> false because 100 is not divisible by 3
isDivisible(12,7,5)--> false because 12 is neither divisible by 7 nor 5*/

function isDivisible(n, x, y) {
  return n % x == 0 && n % y == 0 ? true : false;
}