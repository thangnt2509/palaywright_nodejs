//Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];
let evenArr = [];
let oddArr = [];

for(let index = 0; index < intArr.length; index++){
    if(intArr[index] % 2 === 0){
        evenArr.push(intArr[index]);
    }else{
        oddArr.push(intArr[index]);
    }
}
console.log(`Even numbers: ${evenArr.length}`);
console.log(`Odd numbers: ${oddArr.length}`);


