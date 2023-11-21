// 1masala

function fozilpow(son, daraja) {
  return son ** daraja;
}
console.log(fozilpow(5, 3));

// 2masala

function fozilSqrt(son) {
  return son ** (1 / 2);
}
console.log(fozilSqrt(25));

// 3-masala

function fozilabs(son) {
  son >= 0 && console.log(son);
  son < 0 && console.log(son * -1);
}
fozilabs(22);

// 4-masala

function fozilceil(son) {
  //   son > parseInt(son) && console.log((son) + 1);
  //   son == parseInt(son) && console.log(son);
  son % 2 === 0 && console.log(son);
  son % 2 !== 0 && console.log(son + 1);
}
fozilceil(10);

// // 5-masala

function fozilround(son) {
  son >= parseInt(son) && console.log(parseInt(son) + 1); 
  son < parseInt(son) + 0.5 && console.log(parseInt(son));
}
fozilround(6.8);

// 6-masala
function fozilfloor(son){
    son >= parseInt(son) && console.log(parseInt(son));
    son < parseInt(son) && console.log(parseInt(son));
}
fozilfloor(5.9)





