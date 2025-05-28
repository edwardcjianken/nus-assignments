const prompt = require("prompt-sync")();

const num = prompt("Enter a number:");

if (num > 0) {
  console.log("The number entered is positive.");
} else if (num < 0) {
  console.log("The number entered is negative.");
} else {
  console.log("The number entered is zero.");
}
