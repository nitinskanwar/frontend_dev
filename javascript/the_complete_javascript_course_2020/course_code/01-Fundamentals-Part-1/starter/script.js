/*
let js = 'amazing';
if (js === 'amazing') {
    alert('JavaScript is FUN!');
}
console.log(10 + 20 * 30 / 40);

// Challenge 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.88;

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);

const markhigherBMI = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
    console.log(`Marks' BMI (${bmiMark}) is higher than Johns' (${bmiJohn})`);
} else {
    console.log(`Johns' BMI (${bmiJohn}) is higher than Marks' (${bmiMark})`);
}

// Challenge 2

let avgScoreDolphins = (97 + 112 + 101) / 3;
let avgScoreKoalas = (109 + 95 + 106) / 3;

console.log("Dolphins :" + avgScoreDolphins);
console.log("Koalas :" + avgScoreKoalas);

if (avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    if (avgScoreDolphins > avgScoreKoalas) {
        console.log("Dolphins win the trophy");
    } else if (avgScoreDolphins === avgScoreKoalas) {
        console.log("Its a draw");
    } else {
        console.log("Koalas win the trophy");
    }
} else {
    console.log("No team wins!");
}
*/

// Challenge 3
let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? ((15 / 100) * bill) : ((20 / 100) * bill);
let totalValue = bill + tip
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${totalValue}`);