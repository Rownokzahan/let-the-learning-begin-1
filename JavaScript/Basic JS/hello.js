let FirstName= "Rownok";
let LastName = "Zahan";
console.log(FirstName+' '+LastName);
console.log(typeof FirstName);

let x = true;
console.log(typeof x);

let dream = "My Dream to Get A Job";
console.log(dream.toLocaleLowerCase());
console.log(dream.toUpperCase());
console.log(dream.indexOf("Dream"));

console.log(dream.split('to'))//split divides the string by the sub-string you give in it
console.log(dream.replace('to', 'toa'));


let number1 = 25;
let number2 = 19.67;
console.log(number1+number2);

let number3 = '24';
console.log(number1+number3);

number3 = parseFloat(number3);
number3 = +number3; //work same as parseFloat(number3);  
console.log(number1+number3);

let number4 = 90;
number4 = parseInt(number4);
number4 = ''+number4;//work same as parseInt(number3);


console.log(`number1 is ${number1}`);


var num = -5;
var absoluteNumber = Math.abs(num);
console.log(num);

var numFloat = 5.55367;
var numRound = Math.round(numFloat);
console.log(numRound);

var result = Math.ceil(numFloat);
console.log(result);

var result = Math.floor(numFloat);
console.log(result);