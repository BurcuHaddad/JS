let sentence = "The rain in SPAIN stays mainly in the plain";
const match1 = sentence.match("ain");
const match2 = sentence.match(/ain/);
const match3 = sentence.match(/ain/g);
const match4 = sentence.match(/ain/gi);

console.log(match2)