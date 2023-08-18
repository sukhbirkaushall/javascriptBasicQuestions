// series where the first two terms are 0 , 1 . After that, the next term is defined as the sum of the previous two terms.
let a = 0, b = 1;
console.log(a);
console.log(b);
for(let i =0; i<=10; i++){
    let tem=  a+b;
    console.log(tem);
    a=b;
    b=tem;
}