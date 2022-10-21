<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="container"></div>
    This is my first php website

    <?php
        define('PI',3.14);//this is how to declare constant variable
        echo "<br>";
        echo PI;
        echo "<br> Hello World <br>";

        $variable1 = 45;
        $variable2 = 47;
        echo $variable1+$variable2;
        echo "<br>";    
        echo $variable1 += 1;
        echo "<br>";

        echo "<h1>";
        echo $variable1 -= 1;
        echo "</h1>";

        echo var_dump($variable1==3); // print type and value of the verable
        echo "<br>";
        $var1="13.7";
        echo var_dump($var1);   


    ?>
</body>
</html>