function add(num1,num2){
    const result = num1+num2;
    window.result2 = num1+num2// result is now global variable
    return result;
}
const sum = add(12,13);
// console.log(result);// result is not defined
console.log(result2);
