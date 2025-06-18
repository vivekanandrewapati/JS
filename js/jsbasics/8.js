// // 8. Guess number game:

// javascript
let num = Math.ceil(Math.random() * 10);
let guess = parseInt(prompt("Guess a number between 1 and 10"));
console.log(guess === num ? "Good Work" : "Not matched")