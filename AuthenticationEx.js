const db = [ {"username" : "dad" , "password" : 1234}, {"username" : "bg" , "password" : 4321} ]

function authenticate(givenUsername, givenPassword) {
    let rightCredential = false
    let usernameCredential = false
    for ( let item of db) {
        if (item.username === givenUsername && item.password === givenPassword ) {
            rightCredential = true
            break
        }
    }
    for ( let user of db) {
        if (user.username === givenUsername && user.password != givenPassword) {
            usernameCredential =true
            break
        }
    }
    if (usernameCredential=== true) {
        console.log("Password wrong!");
    }
    if (rightCredential===true) {
        console.log("User authenticated! Welcome " + givenUsername );
    }
    else {
        console.log("Wrong");
    }
}
            
authenticate("dad", 1234);
authenticate("fart", 4567);
authenticate("dad", 6789);
authenticate("fart", 1234)