// const returnValue = asyncFunc01('param1')
// console.log(`returnValue: ${returnValue}`);

//Thenable chain - problem
//Promise.all
asyncFunc01('firstInput')
    .then(function (returnValue1) {
        return asyncFunc02(returnValue1).then(function () {
            return asyncFunc03(returnValue1);
        });
    })
    .then(function (returnValue2) {
        return asyncFunc03(returnValue2);
    })
    .then(function (returnValue3) {
        console.log(returnValue3);
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

