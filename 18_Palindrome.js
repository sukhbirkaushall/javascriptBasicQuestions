// using for loop

let string = prompt('Enter a string');
let len = string.length;
var mes = "palindrome";
for (let i = 0; i < len / 2; i++) {
    if (string[i] != string[len - 1 - i]) {
         mes ="Not palindrome"

    } 
}
console.log(mes)