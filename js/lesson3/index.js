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

//3-masala

let login = "student";
let parol = "1995";

if (login === "student" && parol === "195") {
  console.log("xush kelibsiz");
} else {
  console.log("login yoki parol xato");
}

// 4-masala

let num = 10;

num % 2 === 0 ? console.log("juft son") : console.log("toq son");

// 5-masala

function balltopishSistema(ball) {
  if (ball >= 86 && ball <= 100) {
    return "A";
  } else if (ball >= 71 && ball <= 85) {
    return "B";
  } else if (ball >= 56 && ball <= 70) {
    return "C";
  } else if (ball >= 0 && ball <= 55) {
    return "Faild";
  } else {
    return "Noto'g'ri ball kiritdingiz.";
  }
}
// Misol:
var ball = 55;
var natija = balltopishSistema(ball);
console.log("Natija:", natija);

// 6-masala
let login1 = "Employe";

login1 === "Employe" ? console.log("hello") : console.log("");
login1 === "Director" ? console.log(Greetings) : console.log("");
login1 === "" ? console.log("No login") : console.log("");

// 7-masala

let brow = "Chrome";

if (brow == 'Edge') {
  console.log("You have got the Edge");
} else if(brow == 'Chrome'){
  console.log('Okay we support these browers too');
}
else {
  console.log("We hope that this page look ok!");
}
