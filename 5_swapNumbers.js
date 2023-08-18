//with temporary  variable
let a= 5;
let b=6;
console.log(`Value of a is  ${a}, Value of B is ${b}`);

var temp;       //temp is empty
temp =a;        // temp is 5;
a=b;           //a=6
b=temp;        //b=5            
console.log(`Value of a is  ${a}, Value of B is ${b}`);


//without temporary variable
let a1= 5;
let b1=6;
console.log(`Value of a is  ${a1}, Value of B is ${b1}`);

a1=a1+b1;   //5+6, a1=11
b1=a1-b1;  //11-5, b1=6
a1=a1-b1;  //11-6, a1=5
console.log(`Value of a is  ${a1}, Value of B is ${b1}`);
