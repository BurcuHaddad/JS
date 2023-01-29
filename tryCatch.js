function catchMe() {
    try {
        cpnsple.log("ble")
    }
    catch(err) {
        console.log("we have an error here");
        console.log(err.message);
    }
}
catchMe()