//method searches an array for an element value and returns its position
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
let lastPosition = fruits.lastIndexOf("Apple") + 1;

console.log("Apple is found in position " + position);
console.log("Apple is last found in position " + lastPosition);