/*Javascript Program to Compute Quotient and Remainder*/
let readline = require('readline-sync');
let divisor = readline.questionInt("Enter the divisor: ");
let dividend = readline.questionInt("Enter the dividend: ");

quotient = dividend / divisor;
remainder = dividend % divisor;

console.log("The Quotient is = ", quotient);
console.log("The Remainder is = ", remainder);