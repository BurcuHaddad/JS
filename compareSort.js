const points = [40, 100, 1, 5, 25, 10];
function myFunction1() {
    console.log(points.sort());
    //sorts alphabetically
}
function myFunction2() {
    console.log(points.sort(function(a,b) {return a - b}));
    //sort numerically
}
function myFunction3() {
    console.log(points.sort(function(){return 0.5 - Math.random()}));
}
myFunction1(points);
myFunction2(points);
myFunction3(points)