let speech ="I am a good guy. I don't smoke";

console.log(speech.length);
let count=1;
for(let i=0;i<speech.length;i++){
    if(speech[i]==" "&&speech[i-1] !=" " ){
        count++;
    }
}
console.log(count);

