// using array method

let string = prompt("Enter String");
let stringArray= string.split('');
console.log(stringArray)

let stringArrayRev = stringArray.reverse();
console.log(stringArrayRev)

let reverseString = stringArrayRev.join('');
console.log(reverseString)


if(string=== reverseString){
    console.log("It is palindrome")
}
else{
    console.log("It is not palindrome")

}
