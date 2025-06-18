// 9. Days until next Christmas:


let today = new Date();
let xmas = new Date(today.getFullYear(), 11, 25);
if (today > xmas) xmas.setFullYear(xmas.getFullYear() + 1);
let diff = Math.ceil((xmas - today) / (1000 * 60 * 60 * 24));
console.log(`${diff} days left until Christmas`);
