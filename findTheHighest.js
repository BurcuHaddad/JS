const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return b - a}));
console.log(points.sort(function(a, b){return a - b}))