
// Feet to mile convertor
function feetToMile(feet){
    let mile = feet/5280;
    return console.log(`${feet} feet= ${mile} mile`);
}
feetToMile(4);


// chair =1, table =3,bed =5
function woodCalculator(chair,table,bed){
    let totalWood = chair*1+table*3+bed*5;
    return console.log(totalWood);
}
woodCalculator(3,4,5);


function brickCalculator(noOfFloor){
    if(noOfFloor<=10){
       let  noOfBrick= noOfFloor*15000;
       return console.log(noOfBrick);
    }
    else if(noOfFloor>10 && noOfFloor<=20){
        let x = noOfFloor-10;
        noOfBrick = 150000+(x*12000);
        return console.log(noOfBrick);
    }

    else if(noOfFloor>20){
        let y = noOfFloor-20;
        noOfBrick = 150000+120000+(y*10000);
        return console.log(noOfBrick);
    }
}
brickCalculator(25);


//Search the smallest string in a array
function tinyFriend(arr){
    let x=arr[0];
    for( let i=0; i<arr.length;i++){
        let y =arr[i];
        if(x.length>y.length){
            x=y;
        }    
    }
    console.log(x);
}
let arr= ['Rownok','Mitu','Antora','Mou','Rumi'];
tinyFriend(arr);

