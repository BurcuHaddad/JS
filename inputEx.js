const promptModule = require("prompt-sync");
const prompt = promptModule();

let inputValue =prompt("Please input a number between 5 and 10 ");
try {
    if (inputValue.trim() == "") throw "empty";
    if (isNaN(inputValue)) throw "not a number";
    inputValue = Number(inputValue);
    if (inputValue < 5) throw  "too low";
    if (inputValue > 10) throw "too high";
    }
catch(err) {
        console.log("Input is " + err);
}