/**
 * 1. Send request -> response
 * 2. Process response
 * 3. Validate response
 */
const targetUrl = 'https://sdetpro.com';
//Callback Hell - Problem
sendRequest(targetUrl, function(response){
    processResponse(response, function(statusCode){
        validateResponse(statusCode);
    });
    
});

//Asynchoronous
function sendRequest(url, callback){
    console.log('1. Sending request...');
    setTimeout(function (){
        callback({status: 400});
    }, 1000);
}

//Asynchoronous
function processResponse(response, callback){
    console.log('2. Processing response...');
    setTimeout(function (){
        callback(response.status);
    }, 3000);
}

//Synchrnous
function validateResponse(statusCode){
    console.log('3. Validating response...');
    if(statusCode === 200){
        console.log('Passed');
    }else{
        console.log('Failed');
    }  
}