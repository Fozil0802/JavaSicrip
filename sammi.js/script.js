// let age = 28 // number
// let myName = 'Fozil' // string
// let bool = false// boolean
// let number;
// console.log(number);

// // object

// let person = {

//     name: 'Fozil', // string
//     age: 28, // number
//     isMarried: false, //boleen

// }

// console.log(person);

// //array

// let arr = ['mishka', 'tel'];
// arr[0]= 'decktop'
// console.log(arr);

// let x = 12;
// let y = 6;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);

// let z = 15;
// console.log(z%7);

// x=x+1
// x--
// x++
// console.log(x);

// let a = 10;
// let b = 10;
// console.log(a==b);
// console.log(10=='10')

// console.log('5'+ 5);

// alert('hello')

// let aneswers = confirm('fozil sizmi')
// console.log(aneswers);

// let aneswer = prompt('siz kimisz')
// console.log(aneswer);

//foor loop

//first
//  for( let i =0; i < 10; i++){
// console.log(i)
//  }

//second

// let i = 0;
// do{
// console.log(i);
// }while(i < 10)

// third

// let i = 0;
// while(i < 0){
//     console.log(i);
//     i++
// }

// let aneswes = [];
// let questions = [
//     'what is your name',
//     'how old are you'
// ]

// for(let i = 0; i < questions.length; i++){
//     aneswes[i] = prompt(questions[i])
// }
// console.log(aneswes);

// let aneswes = [];
// let questions = [
//     'what is your name',
//     'how old are you'
// ]

// let i = 0;
// do{
//     aneswes[i] = prompt(questions[i])
// console.log(aneswes);
// }while(i < questions.length)

// let i = 0;
// while(i < questions.length){
//     aneswes[i] = prompt(questions[i])
//     i++
// }
// console.log(aneswes);

// if/else

// let age = prompt('yoshingiz nechida?')

// let age = 5;
// if(age <18){
//     console.log('hali vahtli');
// }else if(age> 60){
//     console.log('kech qoldiz');
// }else{
// console.log('hush kelibsiz');
// }

// switch (age) {
//   case '28':
//     alert("sizni yoshingiz 28da");
//     break;
//   case '55':
//     alert("sizni yoshingiz 55da");
//     break;
//     default:
//       alert('yoshingiz nomalum');
// }

// function

// myFirstfunction('fozil')
// myFirstfunction('okhunjon')
// myFirstfunction('sardor')
// // function decloration

// function myFirstfunction(name) {
//   console.log(`hi my name is ${name}`);
// }

// myFirstfunction('fozil')
// myFirstfunction('okhunjon')
// myFirstfunction('sardor')

// let num = 5;

// function myfirst(name) {
//   let num = 10;
//   num++;
//   console.log(num);
//   console.log(`hi my name is ${name}`);
// }
// myfirst("fozil");
// console.log(num);

// function expression

// myFunc()  Cannot access 'myFunc' before initialization
// let myFunc = function () {
//     console.log('my hobbi IT');
// }
// myFunc()

// function myFirstApp(name, age) {
//   alert(`hi my nam is ${name} and i am frontend developer`);

//   function showSkils() {
//     let skills = ["html", "css", "javascript"];
//     for(let i = 0; i < skills.length; i++){
//         alert(`you have skills ${skills[i]}`);
//     }
//   }
// }

// showSkils();

// DOOM

let chooseBtn = document.getElementById("choose");
reseiveBtn = document.getElementById("receive");
contactForm = document.getElementById("contactform_name")[0];
text = document.getElementsByTagName("h2")[0];
modal = document.querySelector(".modal");
btn = document.querySelectorAll(".main_tel_title")[0];
closeBtn = document.querySelector(".close");
message = document.getElementsByTagName("message")[0];

// first => no
function hover() {
  text.textContent = "tugadi";
}

// second => no

text.onmouseenter = hover;

// thirt

text.addEventListener("mouseenter", hover);
text.addEventListener("mouseenter", function () {
  text.textContent = "tugadi";
});


receiveBtn.addEventListener(function () {
  modal.style.display = "block";
});


closeBtn.addEventListener(function () {
  modala.style.display = "none";
});


contactForm.addEventListener("input", function () {
  message.value = `mening ismim ${contactForm.value} `;
});
