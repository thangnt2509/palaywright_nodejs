class MethodOVerloading {
    //JS does not support method overloading

    // static add(a, b) {
    //     return a + b;
    // }

    // static add(a, b, c) {
    //     return a + b + c;
    // }

    //JS: Rest parameter
    static add(factor, sub, ...nums) {
        return nums.map(value => (value * factor) - sub);
    }

    // static devide(a, b = 1) {
    //     return a / b;
    // }

    static devide(a, b) {
        if(arguments.length !== 1){
            throw new Error('Must provide 2 params');
        }
        if(b === 0){
            throw new Error('Cannot devide by 0');
        }
        return a / b;
    }
}

const result = MethodOVerloading.add(2, 10, 1, 2, 3);
const result2 = MethodOVerloading.devide(10, 2);
console.log(result);