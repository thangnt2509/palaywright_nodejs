// array.filter(() => {

// })

//Higher order function

function sayHello(name) {
    console.log(`Hello ${name}!`);
}
function sayHelloNewStyle(name, age) {
    const withoutAgeQuestion = `How is going ${name}?`;
    const withAgeQuestion = `How is going ${name}? Seem you are ${age} years old`;
    if (age) {
        console.log(withAgeQuestion);
    } else {
        console.log(withoutAgeQuestion);
    }
}

function functionCaller(callBackFunction, name, age) {
    callBackFunction(name, age);
}

functionCaller(sayHello, 'Teo', 18);
functionCaller(sayHelloNewStyle, 'Teo', 18);