//splice can be used tı add new items to an array
const fruits = ["Banana", "Apple", "Orange", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
const citrus = fruits.slice(2);
console.log(fruits);
console.log(citrus);
//2 parameter defines where new elements should be added in.
//0 parameter defines how many elements should be removed.
//slice method creates new array