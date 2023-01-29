const promptModule = require("prompt-sync");
const prompt = promptModule();

const name = prompt("What is your name? ");
console.log(`Hey there ${name} `);

const dadName = prompt("What's your dad's name?");
console.log(`So your name is ${name} and your dads name is ${dadName}`);