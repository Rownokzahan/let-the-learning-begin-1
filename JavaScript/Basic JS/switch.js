let veg = "vendi";

switch(veg){
    case "potol":
        console.log(`${veg}er kg 30 tk.`);
        break;
    case "alu":
        console.log(`${veg}r kg 20 tk.`);   
        break;
    case "begun":
        console.log(`${veg}er kg 40 tk.`); 
        break;

    case "dherosh":    
    case "vendi":
        console.log(`${veg}er kg 50 tk.`); 
        break;    

    default:
        console.log(`${veg} dokane nai.`);   
}

