/*Javascript program to flip Coin and print percentage of Heads and Tails*/
function flipCoin() {
    return (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
}
let heads = 0, tails = 0;
let headPercentage = 1, tailPercentage = 1;
for (let x = 0; x < 10 ; x++)   /*i.e. number of coin toss*/
{
    let coinToss = flipCoin();
    if(coinToss == 'heads'){
        heads++;
    } else {
        tails++;
    }
}
headPercentage = heads * 10;
tailPercentage = tails * 10;
console.log("Percentage of Heads = ",headPercentage);
console.log("Percentage of Tails = ",tailPercentage);
