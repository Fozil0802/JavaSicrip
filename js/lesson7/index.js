//  1-masla

let str = 'FozilL'
// // 2-usul

let newstr = str.trim().toUpperCase();
console.log(newstr[newstr.length - 1] == 'L');
console.log(newstr[newstr.length - 1] == 'l');
console.log();

// // 1-usul

console.log(str[str.length-1]);
  
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
let replacedText = text.replace('#', '(').replace('#', ')').replace('#', '(').replace('#', ')');                                       
console.log(replacedText);

// 6-masala
 let str3 = 'Web'
 let str5 = 'Brain'

//  qiymatlarni almashtirish
let result = str3;
str3 = str5;
str5 = result;

// Natijani chiqarish
console.log('str3:', str3); // 'brain'
console.log('str5:', str5); // 'web'

// str3 ning qiymati result o'zgaruvchisiga saqlanadi.
// str3 ning qiymati str5 ga o'zgartiriladi.
// str5 ning qiymati esa avvalgi str3 ning qiymati (result) ga o'zgartiriladi.
// Natijada, str3 ning qiymati 'brain' bo'ladi, va str5ning qiymati 'web' bo'ladi.