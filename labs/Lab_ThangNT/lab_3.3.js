//Sort an integer array from min to max
let arr = [12, 34, 1, 16, 28];

let sortArr = arr.sort((a, b) => a - b); //negative value: a comes before b, positive value: a comes after b, 0: a and b are equal
// console.log("The array after sorting: " + sortArr);
console.log(sortArr);