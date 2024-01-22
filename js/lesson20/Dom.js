// DOM => document object model
// General overview

// console.log(window);

// console.log(document);
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.title = 'WBA');

//////////////////////////////////////////////////////////

// console.log(document.getElementById('title')); titleni qatoridagi elementni to'liq olib keladi
// console.log(document.getElementById('title').innerHTML); ichida contentni olib kelib beradi

/////////////////////////////////////////////////////////

// Js implementation

// const title = document.getElementById('title');
// const title = document.getElementsByClassName('text');
// const title = document.getElementsByTagName('h1'); //HTMLCollection orqali // ichidagi malumotni olish uchin // title[1].inherHTML // index orqali

// class orqali malumot olsak HTMLCollection orqali arrayni ichida chiqaradi
// ichidagi malumotni olish uchin // title[1].inherHTML // index orqali kiriladi

// ID orqali malumot olsak faqat birinchi malumotni olib beradi
///////////////////////////////////////////////////////

// general => querySelectors.

// querySelector
// ID = CLASS faqat birinchisini oladi
// const general = document.querySelector('#title');
// const general = document.querySelector('.text');
// const general = document.querySelector('h1');

// querySelectorAll

// const general = document.querySelectorAll('#title');// Nodelist(2)[h1#title, h1#title]

// const general = document.querySelectorAll('.text');// Nodelist(n) prototype:Nodelist
// const general = document.querySelectorAll('h1');// Nodelist(n)

////////////////////////////////////////////////////////////

// Tanlangan element ustida amal bajarish

// const title = document.querySelector('h1');
// title.innerHTML = 'Najot Talim';
// title.style.background = 'red';
// title.style.color = 'yellow';

////////////////////////////////////////////////////////

// children
// ol.children => HTMLCollection[ ]
// const ol = document.querySelector('ol');

// for (let i = 0; i < ol.children.length; i++){
//     if (i % 2 === 0) ol.children[i].style.background = 'red'
//     else ol.children[i].style.background = 'green';
// }

/////////////////////////////////////////////////

// const title = document.querySelector('h1');
// const btn = document.querySelector('#btn');
// let isActive = true;

// const onChange = () => {

//     isActive ? (
//       title.style.cssText = `
//       background: red;
//       color: yellow;
//       transition: all 1s linear;
//     `
//     ) : (
//       title.style.cssText = `
//       background: white;
//       color: black;
//       transition: all 1s linear;
//     `
//     )
//       isActive = !isActive
// 

// btn.addEventListener('click', onChange);
