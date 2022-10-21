// function addNumbers(num1,num2){
//     return num1+num2;
// }
// let sum =addNumbers(13,56);
// console.log(sum);

function addNumbers(){
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        const number = arguments[i];
        result = result+number;        
    }
    return result;
}
let sum =addNumbers(13,56,3,5,7);
console.log(sum);