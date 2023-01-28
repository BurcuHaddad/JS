let text = "Visit W3Schools!";
let n = text.search("W3Schools")
console.log(n);
let a = text.search(/w3schools/i);
console.log(a);
let result = text.replace(/w3schools/i, "Microsoft");
console.log(result);