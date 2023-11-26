// object
// promive and non-primitive

let mashina1 = {
  name: "nexia",
  year: 2023,
  engine: 1.6,
  "full name": "nexia daewoo",
};

let mashina2 = {
  name: "gentra",
  year: 2023,
  engine: 1.6,
  1111: 2222
};
// let key = 'year';

// console.log(mashina1 == mashina2);
// console.log(mashina1 === mashina2);

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 == arr2);
// console.log(arr1 === arr2);



// console.log(mashina1.engine);
// console.log(mashina2["name"]);
// console.log(mashina1["full name"]);
// console.log(mashina2['1111']);

// console.log(mashina2.key); 'undefined'
// console.log(mashina2.key); 'undefined'
// console.log(mashina1[key]);'2023'

// mashina1.year = 2002;
// mashina2.color = 'black';
// delete mashina1.name;
// console.log(mashina1);
// console.log(mashina2);

// // object methods
// let arr = [  [ 'year', 2002 ],
// [ 'engine', 1.6 ],
// [ 'full name', 'nexia daewoo' ]]
// console.log(Object.keys(mashina1));
// console.log(Object.values(mashina2));
// console.log(Object.entries(mashina1));
// console.log(Object.fromEntries(arr));

// Object.freeze(mashina1);
// Object.seal(mashina2);
// mashina2.name = 'bmw';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
// console.log(mashina2);