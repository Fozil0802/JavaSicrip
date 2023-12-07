// recursion or recursion function

// function recurse(number) {
//   console.log(number);
//   let newNumber = number - 1;
//   if (newNumber > 0) {
//     recurse(newNumber);
//   }
// }
// recurse(5);

// const findsum = (n) => {
//   if (n > 0) {
//     return n + findsum(n - 1);
//   } else {
//     return n;
//   }
// };
// console.log(findsum(5));

// let person = {
//     id: 1,
//     name: "Odil",
//     age: 78,
//     child: {
//       id: 1,
//       name: "Ali",
//       age: 48,
//       child: {
//         id: 1,
//         name: "Umar",
//         age: 20,
//       },
//     },
//   };

//   let sum = 0;
//    const newsum = (obj) => {
// sum += obj.age
// if(obj.child){
//     newsum(obj.child)
// }
//    }
// newsum(person);
// console.log(sum);

// Closure

// function parent() {
//   let num = 15;
//   function child() {
//     console.log(num);
//   }
//   child();
// }
// parent();

// const parent = () => {
//   let num = 20;
//   const child = () => {
//     console.log(num);
//   };
//   child();
// };
// parent();

// const parent = function () {
//     let num = 20;
//     const child = () => {
//       console.log(num);
//     };
//     child();
//   };
//   parent();

// higher order function => map, forEach, filter, find..
// callback => (map( () => callback))

const arr = [1, 2, 3, 4, 5];

arr.forEach((number) => console.log(number));

// function addOne(input) {
//   for (let i = 0; i < input.length; i++) {
//     console.log(input[i]);
//   }
// }
// addOne(arr);

// getter ans setter

const person = {
  firstName: "Fozil",
  lastName: "Khudpyberdiev",

  get fullName(){
return `${person.firstName} ${this.lastName}`
  },

  set fullName(value){
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1]
  }
};
person.fullName ='Sirojiddin Tangirov'
console.log(person.fullName);

// curry function

// const addition = (a, b, c) => {
//     return a + b + c 
// }
// console.log(addition(2, 3, 4));

const addition = (a) => {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
console.log(addition(2)(3)(4));
