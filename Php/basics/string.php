<?php

    $name = "Rownok Zahan Rupa";

    //string lenghth - strlen()
    $len = strlen($name);

    //string word count - str_word_count();
    $word = str_word_count($name);
    echo  "The string $name has length of $len and has $word words.";
    
    //concatination
    echo  "<br>The string ". $name ." has length of ". $len." and has ". $word." words.<br>";      

    //Reverse a String -strrev()
    echo strrev($name);

    //position of a sub-string in a String - strpos()
    echo  strpos($name, "Za");

    //Replace a sun-string in a string -str_replace()
    echo str_replace("Rupa","Rusha",$name);

?>