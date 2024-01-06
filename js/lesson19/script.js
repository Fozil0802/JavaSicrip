// Error handling

// const add = (a, b) => {
//     return a + b
// }

// try {
//     // xatoga sabab bulishi mumkin bulgan code
//     // let myFunc = add(5, 5);
//     // console.log(myFunc);
//     // throw new Error('Nimadir hato!');
// } catch (e) {
//     // xatoni tutib olish
//     // console.log(e.name);
//     // console.log(e.message);
//     // console.log(e.stack);
//     // console.log(e);
// } finally {
//     console.log('Finally');
// }

// console.log(myFunc);

////////////////////////////////////////////////////////////////////

// JavaScript default xolatda => Synchronous, Single threaded(faqat main thread mavjud), Blocking dasturlash tili hisoblanadi.

// function A() {
//     console.log('A');
// }

// function B() {
//     console.log('B');
// }

// A();
// B();

//////////////////////////////////////////////////////////////////

// Asinxron(asynchronous) JavaScript
// 1-Browser web APIS => setTimeOut(), setInterval();
// 2-Backend bilan malumot almashishda => callback, promise, async/await;
// 3-User interactions => DOM(event listeners);

// setTimeout();
// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 5000);

// setTimeout(() => {
//     console.log(3);
// }, 3000);

// console.log(4);

///////////////////////////////////////////////////////////////

// setInterval()

// setInterval(() => {
//     let d = new Date();
//     console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
// }, 1000)

///////////////////////////////////////////////////////////////////////
// Backend bilan malumot almashishda => callback, promise, async/await;

// callback

console.log('Started...');

let server = {
    id: 3,
    password: 7777,
    username: 'uzb'
}

let facebook = (pw, username, callback) => {
    
    setTimeout(() => {
        
        if (server.password === pw && server.username === username) {
            callback('Welcome to Facebook!!!')
        } else {
            callback('Login yoki Pw xato!!!')
        }
        
    }, 2000)
}

let user = facebook(9999, 'Test', (data) => {
    console.log(data);
    console.log('Finished...');
});

