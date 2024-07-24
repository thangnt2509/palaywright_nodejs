const readline = require('readline-sync');
let isUsing = true;

const account ={
    accountNumber: String,
    routingNumber: String,
    balance: Number
}

const tiAccount = account;
// const tiAccount = JSON.parse(JSON.stringify(account));
tiAccount.accountNumber = '12345';
tiAccount.routingNumber = '98765';
tiAccount.balance = 1000;

const teoAccount = JSON.parse(JSON.stringify(account));
teoAccount.accountNumber = '54321';
teoAccount.routingNumber = '12345';
teoAccount.balance = 2000;

const tunAccount = JSON.parse(JSON.stringify(account));
tunAccount.accountNumber = '12312'; 
tunAccount.routingNumber = '32132';
tunAccount.balance = 3000;

const accounts = [tiAccount, teoAccount, tunAccount];

while(isUsing){
    printMenu();
    let userOption = getUserOption();

    if(userOption == 0){
        isUsing = false;
    }else if(userOption == 1){
        findAccountByAccountNumber();
    }else if(userOption == 2){
        const account = findAccountByAccountNumber();
        withdraw(account);
    }else{
        console.log('Invalid option');
    }
}

console.log('Goodbye!');
function printMenu(){
    console.log('=== Banking application===)');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit');
}

function getUserOption() {
    return readline.question('Please enter your choice (0, 1, 2): ');
}


function findAccountByAccountNumber(){
    const accounNumber = readline.question('Enter account number to find: ');
    for(const account of accounts){
        if(account.accountNumber === accounNumber){
            console.log(`This account is exist: ${account.accountNumber}`);
            return account;
        }
    }
    console.log('This account is not exist');
    return null;
}


function withdraw(account){
    if(account === null){
        return;
    }

    const withdrawAmount = readline.question('Enter the amount you want to withdraw: ');
    if(account.balance >= withdrawAmount){
        account.balance = account.balance - withdrawAmount;
        console.log(`Withdraw successfully! Your current balance is: ${account.balance}`);
    }else if(account.balance < withdrawAmount){
        console.log('Your balance is not enough to withdraw');
    }
}