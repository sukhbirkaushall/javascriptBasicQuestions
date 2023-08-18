// count the number of vowels in a string using Regex.

let string = "AabuiIcmasBASoNBAODSnseadEasudasMNAbmasn";
const reg = /[aeiou]/gi;
let chars = string.match(reg);
console.log(chars.join(","))
console.log(chars.length)