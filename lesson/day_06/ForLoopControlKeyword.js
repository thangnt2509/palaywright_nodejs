//break , continue
const targetNum = 3;
const array = [1, 2, 3, 4, 5];
let targetNumIndex;

// for(index = 0; index < array.length; index++){
//     if(array[index] === targetNum){
//         targetNumIndex = index;
//         break;
//     }
// }
// console.log(`targetNumIndex: ${targetNumIndex}`);

// for(index = 0; index < array.length; index++){
//     if(isEvenNumber(array[index])){
//         continue;
//     }else{
//         array[index] = array[index] + 1;    
//     }
//     console.log(`array[${index}]: ${array[index]}`);
// }
// console.log(`current array: ${array}`);

// function isEvenNumber(number){
//     return number % 2 === 0;
// }
for(index = 0; index < array.length; index++){
    printAllArrayElement(array[index]);
}

function printAllArrayElement(number){
    if(number === 3){
        return;
    }
    console.log(number);
}