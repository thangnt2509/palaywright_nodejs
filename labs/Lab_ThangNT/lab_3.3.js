//Sort an integer array from min to max
let arr = [12, 34, 1, 16, 28];

// let sortArr = arr.sort((a, b) => a - b); //negative value: a comes before b, positive value: a comes after b, 0: a and b are equal
// // console.log("The array after sorting: " + sortArr);
// console.log(sortArr);

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);