// first letter to upper case

let string = "hello";
let firstLetter = string.charAt(0);
console.log(firstLetter);
let remLetters = string.slice(1);
console.log(remLetters);
let firstCapital = firstLetter.toUpperCase();
console.log(firstCapital);
// final word
console.log(firstCapital+remLetters)