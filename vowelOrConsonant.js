/*Java Program to Check Whether an Alphabet is Vowel or Consonant*/
let readline = require('readline-sync');
let letter = readline.question("Enter an alphabet: "); 
switch (letter) {

		case 'a':
		case 'A':
		case 'e':
		case 'E':
		case 'i':
		case 'I':
		case 'o':
		case 'O':
		case 'u':
		case 'U':
			console.log("Given alphabet is a VOWEL");
			break;
		default:
			console.log("Given alphabet is a CONSONANT");
		}
