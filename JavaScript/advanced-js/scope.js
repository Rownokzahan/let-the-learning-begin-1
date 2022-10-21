let bonus =20; // bonus lis global variable
function sum(first,second){
    let result = first+second +bonus; //result is local variable
    return result;
}

const output = sum(13,7);
console.log(output);