//  1-masla

let str = 'FozilL'
// // 2-usul

let newstr = str.trim().toUpperCase();
console.log(newstr[newstr.length - 1] == 'L');
console.log(newstr[newstr.length - 1] == 'l');
const flip = ('d', 'a');
console.log();

// // 1-usul

// console.log(str[str.length-1]);
  
// // 2-masala

let  str1 = 'WebBrain  '

console.log(str1.repeat(7));
console.log(str1.replace('Web', 'IT').repeat(7));


// 3-masala

let yil = 2020;

if (yil % 4 === 0) {
    console.log('Kabisa yili');
}else{
    console.log('Kabisa yili emas');
}

// 4-masala
















let text = '#fozil#web#brain#';
let replacedText = text.replace('#fozil#', '(').replace('#web#', ')').replace('#brain#', '');
                                         
console.log(replacedText);

