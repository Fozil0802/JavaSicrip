//  new Date();

let d = new Date();
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());

// set/map

// const arr = [1, 1, 2, 3, 4, 5, 3, 5, 5, 5, 'salom', 'salom'];
const set = new Set([1, 1, 2, 3, 4, 5, 3, 5, 5, 5, "salom", "salom"]);
// const uniqueArray = [...set]
set.add(95);
set.add("95");
set.add([1, 5]);
set.add({ name: "Fozil" });
set.delete(95);
// set.clear();
// console.log(set.has('salom'));
// console.log(set.size);


// console.log(uniqueArray);
// console.log(arr);
console.log([...set]);
