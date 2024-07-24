let myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Delete | splice: Cat phan tu trong mang tu index 0 den 1 
// myNumArray.splice(0, 2);
// myNumArray.splice(2, 1);// dung o index so 2, xoa 1 phan tu 

// console.log(myNumArray);

//Delete number at index where index is an even number
//but do not delete the number at index rero

let removeingHappenned = false;
for(let index = 1; index < myNumArray.length; index++){
    if(index %2 === 0){
        myNumArray.splice(index, 1)
    }
}
console.log(myNumArray);

//If remove happens -> revert logic
