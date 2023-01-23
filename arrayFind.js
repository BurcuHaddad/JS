const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunc);

function myFunc(value, index, array) {
    return value > 18;
}
console.log(first);

//returns the value of the first array element that passes a test function