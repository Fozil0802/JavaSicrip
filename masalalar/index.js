//  KARAKARA
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }

  console.log("==================");
}

// juft va toq son

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log(evenOrOdd);
//  3-masala
let arr = [1, -4, 7, 12];
let newsum = 0;
function positiveSum(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        newsum += arr[i];
      }
    }
    console.log(newsum);
}

positiveSum(arr)

// 4-masala

let str = 'world'

function solution(str){
  return str.split('').reverse().join('');  
}

solution(str)

