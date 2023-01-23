const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}
myFunction(numbers);
console.log(sum);

//reduce() method works from left-to-right in the array.
//the function takes 4 arguments: the total (the initial value/ previouslt returned value);
//the item value, the item index, the array itself