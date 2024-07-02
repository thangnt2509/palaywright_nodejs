//CRUD: Create, Read, Update, Delete


//Via Array's constructor: Khong can thiet

/*
Literal Declaration (Khai bao tuong minh)
. index: star from 0
. length: number of elements
.
*/
let myNumArray = [1, 2, 3, 4, 5];
let arrayLength = myNumArray.length;
console.log(`Array's length: ${arrayLength}`);
// console.log(`Array's value at index 3: ${myNumArray[3]}`);


// for(let index = 0;index < myNumArray.length; index++){
//     console.log(`Array's value at index ${index}: ${myNumArray[index]}`)
// }

//Convert all elements into even numbers
for(let index = 0;index < myNumArray.length; index++){
    myNumArray[index] = myNumArray[index] * 2;
}
console.log(myNumArray);

myNumArray[10] = 100;

myNumArray.pop();//Remove the last element of the array
console.log(myNumArray);

myNumArray.push(1000);
console.log(myNumArray);//Add a new element to the end of the array