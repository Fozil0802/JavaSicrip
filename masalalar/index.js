//  KARAKARA
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }

  console.log("==================");
}

// juft va toq son
 let num= 15; 
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd(num));
//  3-masala
let arr = [1, -4, 7, 12];
function positiveSum(arr) {
  let newsum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newsum += arr[i];
    }
  }
return newsum
}

console.log(positiveSum(arr));

// 4-masala

let str = "world";

function solution(str) {
  return str.split("").reverse().join("");
}

solution(str); 


        