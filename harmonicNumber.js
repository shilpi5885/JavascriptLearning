/*Javascript program to find N-th Harmonic Number*/
function harmonic(N)
{
    let harmonic = 1.00;

    for (let i = 2; i <= N; i++)
    {
        harmonic += parseFloat(1) / i;
    }
    return harmonic;
}
var readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
let nthHarmonic = harmonic(num);
console.log("Nth Harmonic Number = ",nthHarmonic.toFixed(5));
 