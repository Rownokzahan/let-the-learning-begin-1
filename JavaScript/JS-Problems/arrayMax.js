let marks =[24,65,45,3,7,2,3,98,90];

let max= marks[0];
let element;
for (i=0;i<marks.length;i++){
    element=marks[i];
    if(element>max){
        max=element;
    }
}
console.log(`Highest value of the array is ${max}`);
