let roll =[24,65,45,3,7,2,3,98,90,3,3,7,90,45,56,98];

let uniqueRoll =[];

for(let i=0; i<roll.length;i++){
    let element = roll[i];
    if(uniqueRoll.indexOf(element)== -1){
        uniqueRoll.push(element);
    }
}
console.log(uniqueRoll);