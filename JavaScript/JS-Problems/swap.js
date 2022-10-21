//Swap Using temp variable
let a =5;
let b =6;
console.log(`Before Swap: a = ${a}  b= ${b}`);
let temp =a;
a =b;
b=temp;
console.log(`After Swap: a = ${a}  b= ${b}`);


// Swap Using temp variable
let x =7;
let y =10;
console.log(`Before Swap: x= ${x}  y= ${y}`);
x = x+y;
y = x-y;
x = x-y;
console.log(`After Swap: x= ${x}  y= ${y}`);


let p=23;
let q=34;
console.log(`Before

Swap: p= ${p}  q= ${q}`);
[p, q]= [q, p];
console.log(`After Swap: p= ${p}  q= ${q}`);