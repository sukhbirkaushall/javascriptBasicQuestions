// check the number of occurences of a character in a string

let string = prompt("Enter String");
let letter = prompt("Enter Letter");
let strLen = string.length;
let counter = 0;
for (let i = 0; i < strLen; i++) {
    if (string[i] == letter) {
        counter++;
    }
}
console.log(counter)