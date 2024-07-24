// //Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];
let maxNum = intArr[0];
let minNumber = intArr[0];

for (let index = 1; index < intArr.length; index++) {
    if (intArr[index] > maxNum) {
        maxNum = intArr[index];
    } else if (intArr[index] < minNumber) {
        minNumber = intArr[index];
    }
}
console.log(`The maximum value in the array is: ${maxNum}`)
console.log(`The minimum value in the array is: ${minNumber}`)

