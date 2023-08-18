// armstrong numbers in a given interval

let a = prompt("Enter the lower number")
let b = prompt("Enter the upper number")
for (let i = a; i <= b; i++) {
    let num = i;
    let noOfDigits= i.toString().length
    let sum=0;
    while(num>0){
    let digit = num%10;
    let cube = digit ** noOfDigits
    sum +=cube
     num = parseInt(num/10)
}
if(sum == i){
    console.log(i)
}
}