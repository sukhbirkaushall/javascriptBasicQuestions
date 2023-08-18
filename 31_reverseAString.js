//reverse a string using for loop
let string = prompt('enter a string');
let strLen = string.length;
let revStr ="";
for(let i=strLen-1; i>=0;i--){
    revStr +=string[i]
}
console.log(revStr)