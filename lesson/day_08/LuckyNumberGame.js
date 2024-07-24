const readline = require('readline-sync');
let isPlaying = true;
while (isPlaying) {
    printGameMenu();
    let userOption = getUserNumber();

    if (userOption == 0) {
        isPlaying = false;
    } else if (userOption == 1) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Luck number is ${randomNumber}`);
    } else{
        console.log('Invalid option');
    }
}
console.log('Goodbye!');
function printGameMenu() {
    console.log('1. Generate a random number(1->10)');
    console.log('0. Exit');
}

function getUserNumber() {
    return readline.question('Please enter your number: ');
}