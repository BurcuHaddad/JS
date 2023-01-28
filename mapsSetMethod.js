const fruits = new Map ([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

fruits.set("apples", 200);
console.log(fruits.get("apples"))
console.log(fruits.has("apples"))