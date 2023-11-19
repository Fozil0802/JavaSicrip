// 1-masala

let str = "fozil";
let str2 = "";
for (let i = str.length - 1; i >= 0; i--) {
  // console.log(str[i]);
  str2 = str2 + str[i];
}
console.log(str2);
//  2-masala

let str1 = "WebBrainAcadAmya";
let result = "";
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === "A" || str1[i] === 'a') {
    // console.log(str1[i]);
    // result = result + str1[i];
    result++;

  }
}
console.log("A, a-", result);

// 3-masala manfiyga cheksiz kamayadi

// for(let i = 5; i < 6; i--){
//   console.log(i);
// }

// 4-masala

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(i, "juft son");
  } else {
    console.log(i, "toq son");
  }
}

// 5-masala

let str4 = 'WeBBraIn';
let result1 = '';
for(let i =  0; i < str4.length; i++){
  
  if(str4[i] === str4[i].toUpperCase()){
    result1 += str4[i]
  }
}
console.log(result1);