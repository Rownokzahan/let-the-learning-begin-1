let array = ["rownok",1,3,5,6,7,45,67,89,78];

console.log(array.indexOf(6));
console.log(array.length);

array.push(2);// insert element at the end
console.log(array);

array.unshift(0);// insert element at the begining
console.log(array);

array.pop();// remove element from the end
console.log(array);

array.shift();// insert element at the end
console.log(array);

let newArray = array.slice(3,5);// cut the array from index 2 to index 5 and it does not change the main array.
console.log(newArray);

array.splice(2,6);// keep the rest of the array from index 2 to 5
console.log(array);

