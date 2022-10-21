// function reverseString(string){
//     let reverse="";
//     for(let i=string.length-1; i>=0; i--){
//         char =string[i];
//         reverse= reverse + char;
//         console.log(reverse);
//     }
// }
// let sentence = "Hello Alien Bhai";
// reverseString(sentence);


// More simplier way
function reverseString(string){
    let reverse="";
    for(let i=0; i<string.length; i++){
        char =string[i];
        reverse= char + reverse;
    }
    return console.log(reverse);
}
let sentence = "Hello Alien Bhai";
reverseString(sentence);