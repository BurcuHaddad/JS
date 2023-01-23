//the every() method checks if all array values pass a test
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunc);

function myFunc(value, index, array) {
    return value > 18;
}
console.log(allOver18);