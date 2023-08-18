// check the numbers have a same last digit

let a,b,c;
a=15;
b=25;
c=35;

let res1=a%10;
let res2=b%10;
let res3=c%10;

if(res1 === res2 && res1=== res3){
    console.log('last digits are same')
} else{
    console.log("last digits are different")
}
