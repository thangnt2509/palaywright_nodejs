//import ... from
//export function() {...}

//CommonJS Module System

//ES6 module system

const getWeight = function getWeight(yourCurrentBMI, standardBMI, height) {
    const weight = (height ** 2) * (yourCurrentBMI - standardBMI);
    return Math.abs(weight) ;
}

const sayHello = function(){
    console.log('Hello');

}

//Export
module.exports = { getWeight, sayHello };
