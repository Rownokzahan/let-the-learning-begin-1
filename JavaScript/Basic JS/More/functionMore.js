function doubleTheOddNumbers(numbers){
    let newArr =[];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if( num%2 !=0){
            num=num*2;
        }
        newArr.push(num);
    }
    return newArr;
}
let nums =[5,12,89,45,18,8];
console.log(doubleTheOddNumbers(nums));
