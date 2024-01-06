// console.log('Started...');

// let server = {
//     id: 5,
//     password: 1995,
//     username: 'fozil95'
// }

// let facebook = (pw, username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (server.password === pw && server.username === username) {
//                 resolve('Welcome to Facebook!!!')
//             } else {
//                 reject('Login yoki Pw xato!!!')
//             }
//         }, 2000)
//     })
// }

// async function getData() {
//     try {
//         let user = await facebook(999, "Test");
//         console.log(user)
//         console.log('Finished...');
//     } catch (err) {
//         console.log(err);
//     }
// }

// getData();

/////////////////////////////////////////////////////

// fetching data from backend

async function getData() {
    try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        if (!response.ok) {
            throw new Error("404 saxifa topilmadi!")
        } else {
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
}

getData();
//////////////
// fetch API =>

// fetch("https://jsonplaceholder.typicode.com/pos")
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error("404 saxifa topilmadi!")
//         }
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => console.log(err));