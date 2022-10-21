function checkPrime(num){
    for(let i=2; i<num;i++){
        if(num%i==0){
            return console.log(`${num} is not a prime number`);
            break;
        }
    }
    return console.log(`${num} is prime number`);
}

checkPrime(27)