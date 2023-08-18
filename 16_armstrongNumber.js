// the sum of cubes of each  digit =  the number itself
// 153 = 1*1*1 + 5*5*5 + 3*3*3

let num = 153;
let sum = 0;
let originalNumber = num;
while (num > 0) {
    let digit = num % 10;  // 3 then loop then 5 then loop then 1
    // console.log(digit);
    let cube = digit * digit * digit; // cube of 1 then 5 then 3
    // console.log(cube);
    var output = sum += cube;
    // console.log(output)
    num = parseInt(num / 10)// 153/10= 15.3 gives 15 then 1 i.e 153 -> 15 ->1, over write the number

}

if (originalNumber == output) {
    console.log("armstrong number")
}
else {
    console.log("not an armstrong number")
}