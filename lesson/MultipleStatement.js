//<18: khong ban
// 18 - 55: unlimited
//56: 2 chai

const readline = require('readline-sync');
let clientAge = Number(readline.question('Your age: '));

if(clientAge < 18){
    console.log("Khong ban");
} else if(clientAge >= 18 && clientAge <= 55){
    console.log("Unlimited");
} else {
    console.log('2 chai');
}