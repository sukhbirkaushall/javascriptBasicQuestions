let a = 10;
let fact = 1;
if (a == 0) {
    console.log("factorial is 1")
}
else if (a < 0) {
    console.log("factorial doesnot exits")
}
else {
    for (var i = 1; i < a; i++) {
        fact = fact * i;
    }
    console.log(`The factorial of ${a} is ${fact}`)
}