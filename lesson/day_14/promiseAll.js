/**
 * 1. returnValue1 must be used in async2 and async3
 * 2. Wait until all promises from async2 and async3 resolved then print out
 * 
 */

asyncFunc01('firstParam')
    .then(function (returnValue1) {
        return Promise.all([
            asyncFunc02(returnValue1), 
            asyncFunc03(returnValue1)]);
    })
    .then(function(results){
        const [result2, result3] = results;
        console.log(`result2: ${result2}`);
        console.log(`result3: ${result3}`);
    })
    .catch(function(err){
        resizeBy({status: 500, msg:err})
    });

function asyncFunc01(param1) {
    console.log(`Processing param1: ${param1}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnValue = 'asyncFunc01: ' + param1;
            resolve(returnValue);
        }, 1000);
    });
}

function asyncFunc02(param2) {
    console.log(`Processing param2: ${param2}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnValue = 'asyncFunc02: ' + param2;
            resolve(returnValue);
        }, 2000);
    });
}

function asyncFunc03(param3) {
    console.log(`Processing param3: ${param3}`);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const returnValue = 'asyncFunc03: ' + param3;
            resolve(returnValue);
        }, 2000);
    });
}

