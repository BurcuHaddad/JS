const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

let text = " ";
for (let x of f) {
    text += x + " ";
}

console.log(text);