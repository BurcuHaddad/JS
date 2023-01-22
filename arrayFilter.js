const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
myFunction(numbers);
console.log(over18)

const numbers1 = [45, 4, 9, 16, 25];
const over218 = numbers1.filter(myfunction1);

function myfunction1(value1) {
    return value1 > 18;
}
myfunction1(numbers1);
console.log(over218);