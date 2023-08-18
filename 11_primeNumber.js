let number = prompt("Enter the number");
if (number == 1) {
    console.log("not prime")
}
else if (number < 1) {
    console.log("not prime")
}
else {
    for (let i = 2; i<number; i++) {
        if(number%i==0){
            var res = "Not prime";
            break;
        }
        else{
            var res= "prime";
        }
    }
    console.log(res)
}
