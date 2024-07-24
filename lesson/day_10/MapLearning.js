// CRUD: Create Read Update Delete
// console.log(Object.entries({ name: 'Teo', age: 18 }));
const emergencyList = new Map([
    [ '113', 'Police Dept' ],
    [ '114', 'Fire Dept' ],
    [ '115', 'Ambulance' ],
    [ '116', 'Others' ],
    [ '116', 'ABC' ],


]);

//Read a single value from entry
console.log(emergencyList.get('113'));

//Check if a key exists in the entry
console.log(emergencyList.has('112'));

//Read all values from entry
// console.log(emergencyList);

console.log("=======Loop the maps's entries via keys=======");
for (const key of emergencyList.keys()) {
    console.log(`${key}: ${emergencyList.get(key)}`);
}

console.log("=======Loop the maps's entries via values=======");
for (const value of emergencyList.values()) {
    console.log(`Value: ${value}`);
}

console.log(Array.from(emergencyList.keys()));
console.log(Array.from(emergencyList.values()));

//Update -> Set
emergencyList.set('116', 'Something else');
console.log(emergencyList);

//Delete
console.log(`Size before delete: ${emergencyList.size}`);
emergencyList.delete('116');
console.log(emergencyList);
console.log(`Size after delete: ${emergencyList.size}`);
