function leapYear(year){
    if(year%4==0 && year%100 !=0){
        console.log(`${year} is a Leap Year`);
    }
    else{
        console.log(`${year} is not a Leap Year`);
    }
}

leapYear(1700);