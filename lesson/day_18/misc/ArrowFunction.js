//Function declaration
function add(a, b) {
    return a + b;
}

//Function expression
const add2numbers = function (a, b) {
    return a + b;
}

//Function expression => arrow function
const arrowAdd2numbers = (a, b) => {
    return a + b;
}

//single return statement 
const arrowAdd2Numbers = (a, b) => a + b;
const arrowAdd2Numbers2 = (a, b) => console.log(a + b);

const intArray = [1, 2, 3, 4, 5];
// const evenNums = intArray.filter(function(value){
//     return value % 2 === 0;
// });
// const filterEvenNum = (num) => num % 2 === 0;
const filterEvenNum = num => num % 2 === 0;
const evenNums = intArray.filter(filterEvenNum);
// const evenNums = intArray.filter(value => value % 2 === 0);

console.log(evenNums);

//Lexical this binding
const person = {
    name: 'teo',
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        }, 2000);
    }
}

person.sayHello();
