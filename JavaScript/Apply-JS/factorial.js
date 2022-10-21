/* // Factorial using iteartive way
//Factorial using For loop
function factorial(number){
    let result=1;
    for(let i=number; i>0; i--){
       result *=i;
    }
    console.log(`${number}! = ${result}`);
}
factorial(3);

//Factorial using while loop
function factorialUsingWhileLoop(num){
    let result =1;
    let i = 1;
    while(i<=num){
        result *=i;
        i++;
    }
    console.log(`${num}! = ${result}`);
}
factorialUsingWhileLoop(3);
*/

// Factorial using recursive way
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    } 
}

let x = factorial(3);
console.log(x);

