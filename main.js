// Random Number Generator

const minInput = document.getElementById("minInput");
const maxInput = document.getElementById("maxInput");
const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("myLabel1");

let min;
let max;
let randomNum1;

myButton.onclick = function () {
  min = minInput.value;
  min = Number(min);
  max = maxInput.value;
  max = Number(max);
  randomNum1 = Math.floor(Math.random() * max) + min;
  myLabel1.textContent = randomNum1;
};
