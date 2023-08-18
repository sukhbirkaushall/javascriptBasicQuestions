// using math.max
let a,b,c;
a =10;
b=12;
c=9;
let d = Math.max(a,b,c)
console.log(d)

// user defined
let x,y,z;
x =10;
y=12;
z=9;
Check(x,y,z);                                                                       

function Check(x,y,z){
    if(x >=y && x>=z){
        var res =`${x}`;
    } else if(y >=x && y>=z){
        var res =`${y}`;
    } else {
        var res =`${z}`;
    }
    console.log(res)
}

