//learned traditional for loop and used if conditions and string with index. Learned that uppercase abd lowercase methods cant change the string.

function weirdFactory(str) {
    let newStr=""
    for (let i=0; i<str.length; i++) {
        //console.log(i);
        //console.log(str[i]);
        if (i%2==0) {
            newStr=  newStr + str[i].toUpperCase();
        }
        else {
            newStr= newStr + str[i].toLowerCase();
        }
    }
console.log(newStr);    
}
weirdFactory("make me weird")
weirdFactory("iWroteThisUsingCamelCase")
