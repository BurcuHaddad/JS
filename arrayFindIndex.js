const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunc);

function myFunc(value, index, array) {
    return value > 18;
}
console.log(first);