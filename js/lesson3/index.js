// 1-masala

let meva = "t";

if (meva === "olma") {
  console.log(10000);
} else if (meva === "nok") {
  console.log(12000);
} else if (meva === "tarvuz") {
  console.log(15000);
} else {
  console.log("bunday veva yuq");
}

// 2-masala

let Number = 19;

if (Number % 3 == 0 && Number % 5 == 0) {
  console.log("3ga va 5ga bulnadi");
} else if (Number % 3 == 0 && Number % 5 !== 0) {
  console.log("3ga bulinadi, 5ga bulinmeydi");
} else if (Number % 5 == 0 && Number % 3 !== 0) {
  console.log("5ga bulinadi, 3ga bulinmeydi");
} else {
  console.log("3ga, 5ga bulinmeydi");
}
