//checks if some array values pass a test
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunc);

function myFunc(value, index, array) {
    return value > 18;
}
 console.log(someOver18);