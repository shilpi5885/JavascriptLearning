/*Javascript program to print a table of the powers of two*/
var readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
let powerOfTwo = 1;

		for (let i = 0; i <= num; i++) {
			console.log("2 to the power ", i ," is ", powerOfTwo);

			powerOfTwo = 2 * powerOfTwo;

		}