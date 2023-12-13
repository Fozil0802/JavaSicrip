let cars = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matis" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1.2, name: "Damas" },
  { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
];

// ===============================

// const sortyear = () => {
//   //   let res = cars.sort((a, b) => a.year - b.year);
//   let res = cars.sort((a, b) => a.name.localeCompare(b.name));
//   res = cars;
// };
// sortyear();
// console.log(cars);

// // ==================================

// const onDelete = (ids) => {
//   let filtered = cars.filter((value) => value.id !== ids);
//   //   cars = filtered;
//   console.log(filtered);
// };

// onDelete(5);

//   ================================
// Creat

// const newadd = (user) => {
//     cars = [...cars, {id: cars.length +1, ...user}]
// };
// newadd({name: 'fozil', year: 1995});
// console.log(cars);

// ==============================

const updatenew = (car) => {
  let str = cars.map((value) =>
    value.id === car.id ? { ...value, [car.key]: car.value } : value
  );
  cars = str;
};
updatenew({ id: 1, key: "year", value: 200 });
console.log(cars);

// ==============================

// const onread = () => {
//   let data = cars.map(({ id, name, year, engine }) => {
//     console.log(name);
//   });
// };
// onread();
