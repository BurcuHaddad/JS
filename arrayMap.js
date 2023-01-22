//the map() method creates a new array by performing a function on each array element.
//map() doesn't execute the function for array elements without values.
//map() method doesn't change the original array.

const numbers1= [45, 4, 9, 16, 25];
const numbers2= numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value*2;
}
myFunction(numbers1);
console.log(numbers2);