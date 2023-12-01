// obj advanced1
// non-primitive => copied by reference

let stringInpt = 'test';
let anotherString = stringInpt;

anotherString = 'another test';

console.log(stringInpt);
console.log(anotherString);

const obj = {
    name: 'test',
}
const anotherObj = obj;

anotherObj.name = 'another test';
// console.log(anotherObj); ''natija "{ name: 'another test' }""
obj.status = 'Developer';
console.log(anotherObj == obj); 'true'
console.log(anotherObj === obj); 'true'

const obj1 = {
    name: 'test',
}
const anotherObj = Object.assign({}, obj1);
anotherObj.status = 'Developer';
console.log(anotherObj);
console.log(obj1);

const obj2 = {
        name: 'test',
        properties: {
            location: 'location1'
        }
    }
    // const anotherObj = Object.assign({}, obj2);

    const anotherObj = structuredClone(obj2)

    anotherObj.name  = 'another test';
    anotherObj.properties.location = 'location2';
    console.log(obj2);

// spread operator ...

const obj = {
  name: "John",
  status: 'Developer',
  age: 30,
};
console.log({...obj, name: 'fozil', hobby: 'IT'});
const anotherObj = {...obj, name: 'fozil', hobby: 'IT'}
console.log(anotherObj);

// agar teskari bo'lsa ishlamaydi
const obj = {
      name: "John",
      status: 'Developer',
      age: 30,
    };
    console.log({...obj, name: 'fozil', hobby: 'IT'});d 
    const anotherObj = {name: 'fozil', hobby: 'IT', ...obj}
    console.log(anotherObj);

// Destructure => qayta strukturalash

const employee = {
  id: 1,
  name: "Fozil",
  occuption: "Programmer",
  age: 25,
};
const {id, name, occuption, age} = employee;
console.log(id, name, occuption, age);
console.log(id);
console.log(name);
console.log(occuption);
console.log(age);

const employees = {
  developers: {
    one: {
      id: 1,
      name: "fozil",
      occuption: "programmer",
      age: 28,
    },
    two: {
      id: 2,
      name: "sirojiddin",
      occuption: "developer",
      age: 29,
    },
  },
};

const {
    developers: {
        two: {
            id,
            name,
            occuption,
            age
        }
    }
} = employees;

console.log(occuption);
console.log(age);


const user = {
    name: 'fozil',
    status: 'developer'
}

const {name: ism, status: kasbi}=user;
console.log(ism);
console.log(kasbi);

