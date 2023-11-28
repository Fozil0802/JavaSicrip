// person = {
//       id: 1,
//       name: "Umar",
//       surname: "Ismoilov",
//       ielts: 5.5,
//       student: true,
//       parol: 101,
//     };
//     function Kirish(parol, name) {
//         if(id === 1 && name ==="Umar"){
//             console.log('Hush kelibsiz');
//         }
//         console.log('parol yoki');
//     }
//     console.log(Kirish);

// 1-masala

let obj = {
  id: 1,
  name: "Webbrain",
};


// 2-masala

let person = {
  id: 1,
  name: "Odil",
  age: 78,
  child: {
    id: 1,
    name: "Ali",
    age: 48,
    child: {
      id: 1,
      name: "Umar",
      age: 20,
    },
  },
};
let sum = 0;
while (true) {
  if (person) {
    // console.log(person.age);
    sum += person.age;
  } else {
    break;
  }
  person = person.child;
}
console.log(sum);
