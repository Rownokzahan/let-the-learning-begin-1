;function getArraySum(array){
    let sum =0;
    for (i=0;i<marks.length;i++){
        sum +=marks[i];
    }
    return console.log(`Total sum of the array is ${sum}`);
}

let marks =[24,65,45,3,7,2,3,98,90];
getArraySum(marks);