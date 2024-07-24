function isEvenNumber(value, index, array) {
    return (value % 2 === 0 && value !== 4);
}

function isOddNumber(value, index, array) {
    return (value % 2 !== 0 && value !== 3);
}

const convertToEvenNumbers = function(value, index, array) {
    return value * 2;
}

const sortNumberASC = function(firstValue, secondValue) {
    //[1, 2, 3]
    //1, 2 -> -1 (<=0) -> first < second -> do nothing
    return firstValue - secondValue;
}

const sortNumberDESC = function(firstValue, secondValue) {
    return secondValue - firstValue;
}
module.exports = {
    even: isEvenNumber,
    odd: isOddNumber,
    sortNumberASC,
    sortNumberDESC
};
