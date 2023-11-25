// /string data type
// syntax => "", '', ``;

// let str = 'webbrain';
// console.log(str[7]);
// console.log(str.length);
// console.log(str[str.length - 1]);

// let name = 'fozil'
// let status = 'talabaman'
// let str = `mening ismim: ${name}, ${status}`
// console.log(str);

// let name = "webbrain \n academy"
// console.log(name);
// natija:webbrain
//  academy

// let name = "webbrain \t academy"
// console.log(name);
// natija:webbrain         academy

// let name = "webbrain \r academy"
// console.log(name);
// natija: academy

// `` (backtick) => asosiy xususiyat uzgaruvchi qiymatiga kira olamiz, ES6 da qusgilgan
// \n => new line
// \t => tab joy tashaydi
//  \r => right

// index => turgan joyi, 0 dan boshlanadi
// lenght => uzunlik 1dan boshlanadi

// let str = 'WeBbrain'
// //  console.log(str.charAt(5));
// console.log(str.substring(2, 6));
// console.log(str.slice(2, 5));
// console.log(str.substring(3, 6));

let str = "FOzily";
let str1 = "shavkatovich";

console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.startsWith("F"));
console.log(str.endsWith("l"));
console.log(str.padStart(10, "f"));
console.log(str.padEnd(10, "."));
console.log(str.replace("FOzil", "shavkatovich"));
console.log(str.repeat(5));
console.log(str.concat(str1, "Khudoyberdiev"));

console.log(str.includes("zil"));
console.log(str.indexOf("z"));
console.log(str.lastIndexOf("z"));
console.log(str.trim());
