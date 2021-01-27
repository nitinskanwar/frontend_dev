'use strict';
/*
function logger() {
    console.log('Log something');
}
logger();

const printName = function(name) {
    console.log(name);
}

printName('Nitin');

const calcRetirementTime = (birthYear, retirementAge) => {
    const age = 2020 - birthYear;
    const yearsToRetire = retirementAge - age;
    return yearsToRetire;
}

const calcsRetirementTime = function(birthYear, retirementAge) {
    const age = 2020 - birthYear;
    const yearsToRetire = retirementAge - age;
    return yearsToRetire;
}
console.log(`Years to retire are ${calcRetirementTime(1988, 45)}`);

console.log(`Years to retire are ${calcsRetirementTime(1988, 65)}`);

const calcAverage = (score_1, score_2, score_3) => {
    return (score_1 + score_2 + score_3) / 3;
}

//const avgDolphins = calcAverage(44, 23, 71);
//const avgKoalas = calcAverage(65, 54, 1000)

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
    }

    if (avgKoalas > 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
    }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));

// Tip Calculator
const bills = [125, 555, 44];
const tips = new Array();
const total = new Array();

const calcTip = (bill) => {
    let tip = 0;
    if (bill >= 50 && bill <= 300) {
        tip = 0.15 * bill;
    } else {
        tip = 0.20 * bill;
    }
    return tip;
}

let bill;
for (bill of bills) {
    tips.push(calcTip(bill));
    total.push(bill + calcTip(bill));
}

console.log(bills);
console.log(tips);
console.log(total);

const nitin = {
    firstName: 'Nitin',
    lastName: 'Kanwar',
    location: 'OKC',
    age: 32,
    job: 'Software Dev',
    hasDriversLicense: false,

    getSummary: function() {
        console.log(this.firstName + ' is a ' + this.age + ' years old, ' + this.job + ' and he ' + (this.hasDriversLicense ? 'has ' : 'does not have ') + 'drivers license. He is based out of ' + this.location);
    }
}
nitin.getSummary();
*/

const mark = {
    fullName: 'Mark Miller',
    mass: 65,
    height: 2,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 79,
    height: 1.95,

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
}

console.log(mark.calcBMI() > john.calcBMI() ? `${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} BMI (${john.calcBMI()})` : `${john.fullName} BMI (${john.calcBMI()}) is higher than ${mark.fullName} BMI (${mark.calcBMI()})`);