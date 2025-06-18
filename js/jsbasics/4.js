// Area of a triangle (sides: 5, 6, 7):

javascript
let a = 5, b = 6, c = 7;
let s = (a + b + c) / 2;
let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);