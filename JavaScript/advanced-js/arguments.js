// function addNumber(a,b){
//     return a+b;
// }

// const result =addNumber(16,17);
// console.log(result);

function addNumbers(){
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];       
    }
    return sum;
}
const result =addNumbers(12,34,56,78,90);
console.log(result);
