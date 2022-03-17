/*Javascript program to find prime factors of number N*/
function primeFactors(N) {
    while (N % 2 == 0) {
        console.log(2 + " ");
        N /= 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        while (N % i == 0) {
            System.out.print(i + " ");
            N /= i;
        }
    }
    if (N > 2)
        console.log(N);
}
var readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
primeFactors(num);