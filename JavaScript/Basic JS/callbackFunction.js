// Example of Callback function
function callbackDemo(name,age,task){
    console.log(`Hello ${name}.Your age is ${age}`);
    task();
}
function washHand(){
    console.log(`You should wash your hand`);
}

function takeShower(){
    console.log(`You should take shower`);
}


callbackDemo('Arisha', 19, takeShower);