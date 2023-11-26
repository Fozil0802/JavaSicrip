// 1-masala
let user = {
  name: "John",
  surname: "Smith",
};

user.name = "Pete";
delete user.name;
console.log(user);

// 2-masala
let schedule = {name:'fozil'};

function isEmpty(obj){
  for(let key in obj){
    return false
  } 
  return true
}

console.log(isEmpty(schedule));

// 3-masala

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
for(let key in salaries){
  sum += salaries[key]
}
console.log(sum);

// // 4-masala

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiply(obj){
  for(let key in obj){
    if(typeof obj[key] === 'number'){
      obj[key] *= 2
    }
  }
}
multiply(menu);
console.log(menu);

