function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function isEven(number) {
    return number % 2 === 0;
}

module.exports = {
    add,
    multiply,
    isEven
};