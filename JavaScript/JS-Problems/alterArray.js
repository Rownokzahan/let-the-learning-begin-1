// [1,2,3,4] = [24,12,8,6]
// [24,12,8,6] = [576, 1152, 1728, 2304]

function alterArray(arr){
    let newArray =[];
    let mul =1;

    for(let i=0;i<arr.length;i++){
        mul = mul*arr[i]
    }
    // console.log(mul);

    for(let i=0;i<arr.length;i++){
        let element = mul/arr[i];
        newArray.push(element);
    }
    return console.log(newArray);
}
let arr = [24,12,8,6];
alterArray(arr);