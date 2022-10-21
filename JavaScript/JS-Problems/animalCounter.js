function animalCounter(depth){
    let animal =0;
    if(depth<=10){
        animal =depth*50;
    }

    else if (depth<=20){
        animal = 500 + (depth-10)*100;
    }

    else{
        animal = 500 + 1000 + (depth-20)*300;
    }

    return console.log(animal);
}

animalCounter(13);