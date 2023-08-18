// calculator using switch case
let num1 = prompt("1st Number")
let num2 = prompt("2nd Number")
let operator = prompt('Operator +,-,*,/');
switch (operator) {
    case "+":
        let res = parseFloat(num1) + parseFloat(num2);
        console.log(res);
        break;

    case "-":
        let res1 = parseFloat(num1) - parseFloat(num2);
        console.log(res1);
        break;

    case "*":
        let res2 = parseFloat(num1) * parseFloat(num2);
        console.log(res2);
        break;

    case "/":
        let res3 = parseFloat(num1) / parseFloat(num2);
        console.log(res3);
        break;
    default:
        console.log("invalid operator")
}