const readline = require('readline-sync');
const randomNumber = generateRandomNumber();
let userNum = getUserNumber();

// if (userNum == 2) {
//     console.log('Monday')
// } else if (userNum == 3) {
//     console.log('Tuesday')
// } else if (userNum == 4) {
//     console.log('Wednesday')
// } else if (userNum == 5) {
//     console.log('Thursday')
// } else if (userNum == 6) {
//     console.log('Friday')
// } else if (userNum == 7) {
//     console.log('Saturday')
// } else if (userNum == 8) {
//     console.log('Sunday')
// } else {
//     console.log('Invalid option, 2 -> 8')
// }

switch (userNum) {
    case "2":
        console.log('Monday');
        break;
    case "3":
        console.log('Tuesday');
        break;
    case "4":
        console.log('Wednesday');
        break;
    case "5":
        console.log('Thursday');
        break;
    case "6":
        console.log('Friday');
        break;
    case "7":
        console.log('Saturday');
        break;
    case "8":
        console.log('Sunday');
        break;
    default:
        console.log('Invalid option, 2 -> 8');
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
function getUserNumber() {
    return readline.question('Please enter your number: ');
}