const points = [40, 100, 1, 5, 25, 10];
console.log(points);
let text= points.sort(function(a,b){
    return a - b
});
console.log(text);