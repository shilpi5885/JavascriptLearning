/*Javascript Program to Swap Two Numbers*/
let readline = require('readline-sync');
let firstNumber = readline.questionInt("Enter first number: ");
let secondNumber = readline.questionInt("Enter second number: ");
let thirdNumber = 0;
console.log("Before Swapping: First Number = ", firstNumber, " Second Number = ", secondNumber);
thirdNumber = firstNumber;
firstNumber = secondNumber;
secondNumber = thirdNumber;
console.log("After Swapping: First Number = ", firstNumber, " Second Number =", secondNumber);