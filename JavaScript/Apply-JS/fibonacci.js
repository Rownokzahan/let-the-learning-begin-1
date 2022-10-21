/* first try 🤣🤣
function fibonacci(num){
    let n2 = 1;
    let n1 =0;
    let sum =0;
    for(let i=0; i<num; i++){
        console.log(sum);
        n1=n2;
        n2=sum;
        sum = n2+n1;
    }
}
fibonacci(6);
*/

/* Second try 😂😒
let fibo =[0,1];
for(let i=2; i<10; i++){
    let n2= fibo[i-1];
    let n1= fibo[i-2];
    let sum = n2+n1;
    fibo.push(sum);
}
console.log(fibo);
*/

//Reducing the code lines
function fibonacciSeries(num){
    let fibonacci =[0,1];
    for(let i=2; i<num; i++){
        fibonacci[i] =fibonacci[i-1]+fibonacci[i-2];
    }
    return console.log(fibonacci);
}
fibonacciSeries(10);


// fibonacci nth number using recursive
function fibonacci(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    else{
       return fibonacci(n-1)+fibonacci(n-2);
    }
}
let x = fibonacci(3);
console.log(x);


// fibonacci series using recursive
function fibonacciSeriesRecursive(n){
    if(n==0){
        return [0];
    }

    else if(n==1){
        return [0,1];
    }

    else{
        let fibo = fibonacciSeriesRecursive(n-1);
        // let nextElement =fibo[n-1]+fibo[n-2];
        // fibo.push(nextElement);
        fibo.push(fibo[n-1]+fibo[n-2])
        return fibo;
    } 
}

let y = fibonacciSeriesRecursive(3);
console.log(y);