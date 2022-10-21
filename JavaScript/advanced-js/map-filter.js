// Double array elements
const numbers = [12,3,4,2,7];

/* //using for loops
const numbers2 =[];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]*numbers[i];
    numbers2.push(number);  
}
console.log(numbers2);
*/

/* // using map function
const result = numbers.map(function(element,index,array){
    // console.log(element,index,array);
    return element*element;   
});
console.log(result);
*/

// const squre =element => element*element;
// console.log(squre(4));

// const squre =x => x*x; // array function
// console.log(squre(4));

// using map function but reducing the codelines
const result = numbers.map(x=>x*x);
console.log(result);

// filter function
const biggerThan5 = numbers.filter(x => x>5);
console.log(biggerThan5);

// find function

const isThere = numbers.find(x => x>5);
console.log(isThere);