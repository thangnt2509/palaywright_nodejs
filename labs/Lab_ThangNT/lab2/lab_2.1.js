const readline = require('readline-sync');

let weight = readline.questionFloat('Your weight (Kg): ');
let height = readline.questionFloat('Your heigh (Meter): ');

let bmi = weight / (height * height);
const UNDERWEIGHT = 18.5;
const NORMALWEIGHT = 24.9;
const OVERWEIGHT = 29.9;
let bmiStatus = '';
if(bmi > 29.9) {
    bmiStatus = 'Obesity'
} else if (bmi > 24.9) {
    bmiStatus = 'Overweight';
} else if(bmi >= 18.5) {
    bmiStatus = 'Normal weight';
} else {
    bmiStatus = 'Underweight';
}

console.log(`Your BMI is ${bmi}, you are ${bmiStatus}`);
if(bmi > 24.9) {
    console.log('You should loose some weight');
}

if(bmi < 18.5) {
    console.log('You should gain some weight')
}
