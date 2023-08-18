// recursion- the process in which a function calls itself directly and directly is called recursion.
var number = 5;
var fact = 1;
// console.log(fact);
function factr(n) {
    if (n > number) {
        return;
    }
    fact = fact * n;
    // console.log(fact);
    n++;
    factr(n);
}
factr(1);
console.log(fact);