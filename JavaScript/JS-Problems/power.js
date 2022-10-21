function power(num,pow){
    if(pow==1){
        return num;
    }
    return num*power(num,pow-1);
}
// console.log(power(2,3));


function reverseArray(arr){
    reverse=[];
    // for(let i=0; i<arr.length;i++){
    //     reverse.unshift(arr[i]);
    // }
    // console.log(reverse);

    if(arr[i]==-1){
        return arr;
    }
    return reverse.unshift(reverseArray(arr[i]-1));
}
let x =[2,3,4,5,6,7,8];
reverseArray(x);


