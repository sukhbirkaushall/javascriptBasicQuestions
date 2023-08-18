//sum of natural numbers using recurssion

function sum(num) {
    if (num > 0) {
        return num + sum(num - 1)
    }
    else{
        return num;
    }
}
let res = sum(20);
console.log(res)