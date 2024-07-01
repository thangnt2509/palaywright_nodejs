const readline = require('readline-sync');
// Ask the user for a number
const number = readline.question('Enter a number: ');

// Check if the number is odd or even
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}
