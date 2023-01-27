const letters = new Set (["a","b","c"]);
console.log(letters.size);

letters.add("d");
console.log(letters.values());
console.log(letters.has("a"));