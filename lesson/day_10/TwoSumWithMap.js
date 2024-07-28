/**
 * Two Sum
 * [3, 7, 22, 1], target number: 8 -> [index1, index2] -> [1, 3]
 * Assumptions: Only one indice existing
 * 
 * outer loop -> 0 -> length-1
 * firstNum
 * inner loop -> index+1 -> length-1
 *      secondNum
 *        if(firstNum + secondNum == target){
 *          return [firstIndex, secondIndex]
 * 
 * return []
 */

const givingArray = [3, 7, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingNestedLoop(givingArray, targetNumber);
let indices2 = findIndicesUsingMap(givingArray, targetNumber);
console.log(indices);
console.log(indices2);

//On^2
function findIndicesUsingNestedLoop(givingArray, targetNumber) {
    //Brute force
    for (let firstNumberIndex = 0; firstNumberIndex < givingArray.length; firstNumberIndex++) {
        const firstNumber = givingArray[firstNumberIndex];
        for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < givingArray.length; secondNumberIndex++) {
            const secondNumber = givingArray[secondNumberIndex];
            if (secondNumber === targetNumber - firstNumber) {
                return [firstNumberIndex, secondNumberIndex];
            }
        }

    }
    return [];
}

//has
/**
 * []
 * firstNum = 3
 * lookingNumber = 8 - 3 = 5
 * [
 *   [3, 0],
 *   [7,1],
 *   [22, 2],
 * 
     * ]
     */
    
    /**
     * loop index 0 -> length-1
     * firstNum
     * lookingNumber = target - firstNum
     * if(map.has(lookingNumber))
     *    return [map.get(lookingNumber), firstNumIndex]
     * map.set(firstNum, firstNumIndex)
    */

//Time complexity: O(n)
function findIndicesUsingMap(givingArray, targetNumber) {
    let numMap = new Map();
    for(let firstNumberIndex = 0; firstNumberIndex < givingArray.length; firstNumberIndex++){
        const firstNumber = givingArray[firstNumberIndex];
        const lookingNumber = targetNumber - firstNumber;
        if(numMap.has(lookingNumber)){
            return [firstNumberIndex, numMap.get(lookingNumber)];
        }
        numMap.set(firstNumber, firstNumberIndex);
    }
    
    return [];
}