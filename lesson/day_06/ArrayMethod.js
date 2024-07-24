//Filter
// let evenNumbers = myArray.filter(function (value, index, array){
//     // console.log(index,array, value);
//     return value % 2 === 0;
// }); 
const { even, odd, sortNumberASC, sortNumberDESC } = require('../../utils/ArrayHelper');

let myArray = [1, 2, 3, 4, 5];
let evenNumbers = myArray.filter(even);
let oddNumbers = myArray.filter(odd);

// function isEvenNumber(value, index, array) {
//     return (value % 2 === 0 && value !== 4);
// }

// function isOddNumber(value, index, array) {
//     return (value % 2 !== 0 && value !== 3);
// }
console.log(evenNumbers);
console.log(oddNumbers);

//Sort - String

//Sort - Number
let otherNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
otherNumArray.sort(sortNumberASC);
console.log(otherNumArray);

otherNumArray.sort(sortNumberDESC);
console.log(otherNumArray);

let mixedContentArray = ['a', 'A', '1'];
console.log(mixedContentArray.sort());
//conver to ASCII code
//a: 32
//A: 65





