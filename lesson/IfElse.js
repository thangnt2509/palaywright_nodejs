const readline = require('readline-sync');

let myName = readline.question('Your name: ');
let myAge = readline.question('Your age: ');
console.log(`${myName}`, `${myAge}`);

let myNextAge = Number(myAge) + 1;
console.log(myNextAge) ;

let arrivalTime = readline.question('arrivalTime: ');
let isOnTime = (arrivalTime == 7);
//Neu === vuwa so sanh gia tri vua so sanh kieu du lieu

if(isOnTime){
    console.log('Let\'s talk');
}else{
    console.log('Write a letter!');
}

if(!isOnTime){
    console.log('Write a letter!');
}else{
    console.log('Let\'s talk');
}

//Ternary operation: Toan tu 3 ngoi
let msg = isOnTime ? 'Let\'s talk' : 'Write a letter!'
console.log(msg);

