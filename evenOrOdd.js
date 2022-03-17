/*Javascript Program to Check Whether a Number is Even or Odd*/
let readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");

if (num % 2 == 0)
	console.log("Number is EVEN");
else
	console.log("Number is ODD");
