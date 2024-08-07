const todo1Endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
// const res = fetch(todo1Endpoint);
// console.log(res);

// fetch(todo1Endpoint).then(function(response){
//     console.log(response);
//     return response.json();
// })

// function getResponse(response){
//     return response.json();
// }

test();
async function test(){
    const response = await fetch(todo1Endpoint);
    const json = await response.json();
    console.log(JSON.stringify(json));
} 