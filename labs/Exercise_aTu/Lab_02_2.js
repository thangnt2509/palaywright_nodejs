const readline = require('readline-sync');

// let userInput = readline.question('Please enter a number: ');
// let userInputNum = Number(userInput);

// if(userInputNum % 2 === 0){
//     console.log(`The ${userInput} is an even number!`);
// } else {
//     console.log(`The ${userInput} is an odd number!`);
// }

let result = 2/'inputNumber';
if(Number.isNaN(result)){
    console.log('The input is not a number');
}