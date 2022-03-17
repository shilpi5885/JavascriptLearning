/*Javascript program to check given year is leap year or not*/
var readline = require('readline-sync');
let year = readline.questionInt("Enter a year: ");
if (year >= 1582) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        console.log("Specified year is a leap year");
    else
        console.log("Specified year is not a leap year");
} else {
    console.log("Invalid Year!");
}