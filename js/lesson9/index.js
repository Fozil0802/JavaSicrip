// 1-masala

let obj1 = {
  id: 1,
  name: "Webbrain",
};

for (let key in obj1) {
  // console.log(key);
}

// 2-masala
let obj2 = {
  id: 1,
  name: "Webbrain",
};

// console.log(obj2[key]);
// console.log(key + ": " + obj2[key]);
console.log("id: " + obj2.id);
console.log("No3: " + obj2.No3);

// 3-masala
let obj = {
  id: 1,
  name: "WebBrain",
  offline: true,
  online: true,
  individual: false,
};

// Obyektning faqat boolean tipidagi maydonlarini ajratib olamiz
let booleanValues = {};
for (let key in obj) {
  if (typeof obj[key] === "boolean") {
    booleanValues[key] = obj[key];
  }
}

// Natijani chiqaramiz
console.log(booleanValues);

// 4-masala

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

//5-masala

let person1 = {
  id: 1,
  name: "Umar",
  surname: "Khudoyberdiev",
  ielts: 6,
  student: true,
  parol: 2006,
};

function Kirish(parol, name) {
  // Bazadagi ma'lumotlar
  let bazadagiParol = person1.parol;
  let bazadagiName = person1.name;

  // Togri kirish tekshirish
  if (parol === bazadagiParol && name === bazadagiName) {
    console.log("Hush kelibsiz!");
  } else {
    console.log("Parol yoki ism xato");
  }
}
Kirish();
