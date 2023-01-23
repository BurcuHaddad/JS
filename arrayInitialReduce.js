const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunc, 100);

function myFunc(total, value) {
    return total + value;
}

console.log(sum);