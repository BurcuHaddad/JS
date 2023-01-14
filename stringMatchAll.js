let text = "I love cats. Cats are very easy to love. Cats are very popular."

const iterator = text.matchAll("Cats") ;

console.log(Array.from(iterator));