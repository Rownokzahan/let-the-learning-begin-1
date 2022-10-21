<?php
//While Loop
    $a =0;
    while ($a <= 10) {
        echo '<br>The value of a is : ';
        echo $a;
        $a++;
    } 

    //do while
    $i=0;
    do{
        echo '<br>'.$i;
        $i++;
    }while($i>10);

    //for loop
    for ($i=0; $i <10 ; $i++) { 
        echo '<br>The value of a is : ';
        echo $i; 
    }

    $numbers = array(2,4,6,8,10,11,223,334);

    // for ($i =0;$i<count($numbers); $i++){
    //     echo '<br>'.$numbers[$i];
    // }

    //better way to do this--foreach loops
    foreach ($numbers as $value) {
        echo "$value <br>";

    } 

?>        