let x = 340;
let y = 546;
let z = 660;

let max = Math.max(x,y,z);
console.log(max)
// if ( x>y && x>z){
//     console.log(`x is bigger`);
// }
// else if(y>x && y>z){
//     console.log(`y is bigger`);
// }

// else{
//     console.log(`z is bigger`);
// }

if(x>y){
    if(x>z){
        console.log(`x is bigger`);
    }
    else{
        console.log(`z is bigger`);
    }
}
else {
    if(y>z){
        console.log(`y is bigger`);
    }
    else{
        console.log(`z is bigger`);
    }
}