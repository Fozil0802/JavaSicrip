// 1-masala
let cars = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matis" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];
// let filtering = cars.filter(value => value.year < 2000)
// let filtering = cars.filter(value => value.year > 2010)
// let sorting = cars.sort((a,b) => a.engine -b.engine)
// let sorting = cars.sort((a,b) => a.year -b.year)
// let sorting = cars.sort((a,b) => a.name.localeCompare(b.name))
// let filtering = cars.filter(value => value.year > 2010)
// let mapping = filtering.map((value) => {
//   return {...value, status: "Eski" };
// });
// console.log(mapping);

const onDelete = (ids) => {
  let filtered = cars.filter((value) => value.id !== ids);
//   cars = filtered;
console.log(filtered);
};

// console.log(filtering);
// console.log(sorting);
onDelete(5)
// // console.log(cars);

// 2-masala
let arr = [25, 30, 70, 85, 40, 5, 95];

let min = arr.sort((a, b) => a - b)[0];
let max = arr.sort((a,b) => a - b).slice(-1);
console.log(min);

let obj = "min"
// 3-masala

let arr1 = [1, [3, [5]],[10]];
let flatting = arr1.flat(Infinity);
let sum = flatting.reduce((initial, total) => initial + +total, 0)
console.log(sum);

// 3-masala

