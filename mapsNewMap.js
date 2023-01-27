//Map remembers original insertion order.
//holds key-value pairs where keys can be any data type
const fruits = new Map ([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits);
console.log(fruits.get("apples"));