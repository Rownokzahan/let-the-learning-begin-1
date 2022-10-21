function greetings(name){
    console.log(`Hello ${name},Good Morning!`);
}
greetings("Rupa");

//Function With Parameter
function checkEvenOrOdd(number){
    if(number%2==0){
        console.log(`The number ${number} is even`);
    }
    else{
        console.log(`The number ${number} is odd`);
    }
}
checkEvenOrOdd(34);
checkEvenOrOdd(9);

//Function With Result
function circleArea(radius){
    return 3.1416*(radius*radius);
}
let r = circleArea(25);
console.log(`The Area of circle is ${r}`);