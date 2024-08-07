run();
async function run(){
    const return1 = await asyncFunc01('param1');
    const return2 = await asyncFunc02(return1);
    const return3 = await asyncFunc03(return2);
} 

function asyncFunc01(param1){
    console.log(`Processing param1: ${param1}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnValue = 'asyncFunc01' + param1;
            resolve(returnValue);
        }, 1000);
    });
}

function asyncFunc02(param2){
    console.log(`Processing param2: ${param2}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnValue = 'asyncFunc01' + param2;
            resolve(returnValue);
        }, 2000);
    });
}

function asyncFunc03(param3){
    console.log(`Processing param3: ${param3}`);
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const returnValue = 'asyncFunc01' + param3;
            resolve(returnValue);
        }, 2000);
    });
}