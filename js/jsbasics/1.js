
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[today.getDay()];
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;
console.log(`Today is : ${day}.`);
console.log(`Current time is : ${hours} ${ampm} : ${minutes} : ${seconds}`);