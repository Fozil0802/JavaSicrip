// Class
// instance => class ni malum bir uzgaruvchiga tenglansa, usha uzgaruvchi tenglanayotgan classning 'instance'i hisoblanadi, ya'ni class dagi barcha xususiyatni usha instance uziga uzlashtiradi
// constructor(name, color, price) => class ning parametrlarini oladi
// this.name = name; => this orqali global qilib olinadi, bomasa ishlata olmaymiz
// new => classni chaqirishda foydalanamiz

// Class inheritance
// extends => maxsus keyword, parent class dagi property metodlarni childga utkazadi
// super() => parent classdagi parametrlarni, child class da ishlatishga imkon beradi.

// Decimal to binary
// let x = 50; // decimal
// let toBinary = x.toString(2); // binary

///////////////////////////////////////////////////////////

// Binary to decimal
// let x = 110010; // binary
// let toDecimal = parseInt(x, 2); // decimal

// console.log(toDecimal);

///////////////////////////////////////////////////////////////////////////////////
// eval() => string ichida arifmetik amal bajarish uchun ishlatiladi
// let a = 10;
// let b = 20;
// let result = 'a + b';
// let lastResult = eval(result);

// console.log(lastResult);

//////////////////////////////////////////////////////////////////////////////////////////
// JavaScript => multi paradigm programming language

// OOP => Object oriented  => tamoyillari => 1-Encapsulation, 2-Polymorphism, 3-Inheritance, 4-Abstraction
// FP => Functional programming

/////////////
// Class => reusable object yaratish uchun shablon(template) hisoblanadi.

// class Mashina {
//     // parametr berish uchun constructor dan foydalanamiz
//     constructor(name, color, price) {
//         this.name = name;
//         this.color = color;
//         this.price = price;
//     }
    
//     showInfo() {
//         console.log(`${this.color} ${this.name} ning narxi ${this.price}`);
//     }
    
//     showColor() {
//         console.log(`${this.color}`);
//     }
// }

// const mashina1 = new Mashina('Jentra', "Qora", "15000$");
// const mashina2 = new Mashina('Nexia', "Oq", "10000$");
// const mashina3 = new Mashina('Damas', "Qizil", "7000$");
// mashina3.showColor();

// console.log(typeof Mashina);  // class ni uzi typeof function qaytaradi
// console.log(typeof mashina3); // typeof object qaytaradi

//////////////////////////////////////////////////////////////////////////////////////

// Inheritance(meros olish) => in class

class User1 {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    
    register() {
        console.log(`${this.username} xozir ruyxatdan o'tdi!`);
    }
}

class User2 extends User1 {
    constructor(username, email, password, membership) {
        super(username, email, password, status);
        this.membership = membership;
    }
    
    getPackage() {
        console.log(`${this.username} ${this.membership} paketga azo buldilar!`);
    }
}

class User3 extends User2 {
    constructor(username, email, password, membership, age) {
        super(username, email, password, membership);
        this.age = age;
    }
    
    getResult() {
        console.log(`${this.username} ${this.membership} ${this.age}`);
    }
}

// let user = new User3("Ohunjon", 'test@gmail.com', 999999, 'Oylik', 25);
// user.getPackage();
// user.register();
// user.getResult();

///////////////////////////////////////////










