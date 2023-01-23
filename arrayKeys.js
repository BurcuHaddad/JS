//returns an array iterator object with the keys of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = " ";
for (let x of keys) {
    text += x + " ";
}

console.log(text)