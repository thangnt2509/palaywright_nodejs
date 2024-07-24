let teo = {
    name: 'Teo',
    age: 10,
    bankAccount: {
        accountNumber: 123
    }

}

let tun = {
    name: 'Tun',
    age: 15

}

//Shallow copy using spread syntax
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

let ti = {...tun, ...teo};
// ti.name = 'Ti';
// ti.age = 12;

// console.log(teo);
console.log(ti);