const readline = require('readline-sync');
const UltilMethods = require('../day_05/UtilMethods');
//Destructure
const {getWeight, sayHello} = require('../day_05/UtilMethods');

const yourCurrentBMI = currentWeight / (height ** 2);
const minIdealBMI = 18.5;
const maxIdealBMI = 24.9;

if (myBMI < minIdealBMI) {
    const gainingWeight = (height ** 2) * (minIdealBMI - yourCurrentBMI);
    console.log(`You should increase at least ${gainingWeight}(kg)`);
} else if (myBMI <=  maxIdealBMI) {
    console.log('Great, keep it up!');
} else if (myBMI <= 29.9){
    const losingWeight = (height ** 2) * (yourCurrentBMI - minIdealBMI);
    console.log(`You should increase at least ${losingWeight}(kg)`);
}  else {

}

//Function declaration
function getWeight(yourCurrentBMI, standardBMI, height) {
    const weight = (height ** 2) * (yourCurrentBMI - standardBMI);
    return Math.abs(weight) ;
}