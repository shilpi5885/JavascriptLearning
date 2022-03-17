/*Javascript Program to Find the Largest Among Three Numbers*/
let readline = require('readline-sync');
let a = readline.questionInt("Enter first number: ");
let b = readline.questionInt("Enter second number: ");
let c = readline.questionInt("Enter third number: ");

let d = c > (a > b ? a : b) ? c : ((a > b) ? a : b);
console.log("Largest Number:", d);