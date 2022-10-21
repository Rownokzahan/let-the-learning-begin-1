// In JS every number and string is true except 0 and "", null ,undefined, NaN

// Falsy = [0,"",null,undefined,NaN,false ]
// Truthy =['0'," ",[],{},'false']

const age =0;

if (age){
    console.log("Condition is true");
}
else{
    console.log("Condition is false");
}