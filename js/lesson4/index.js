// 1-masala

let str = 'salom'
 for(let i = str.length -1; i>=0; i--){
    console.log(str[i]);
 }

//  2-masala

let str1 = "WebBrainAcadAmya";
let result = '';
for (let i = 0; i < str1.length; i++) {
  if (str1[i] === "A") {
    // console.log(str1[i]);
    result = result + str1[i];
  }
  if (str1[i] === "a") {
    // console.log(str1[i]);
    result = result + str1[i];
  }
}
console.log('A, a-', result.length);
