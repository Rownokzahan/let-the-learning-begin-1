# Short-Cuts of VS code
## How to open a project/folder using cmd in vs code?
    1. click on the path
    2. write "code ."
    3. click Enter

## To get html syntax?
    Type ! and click Enter

## To get,
    <div class="container"></div>
    Type div.container or Type .container

## To view full line in small window click alt + z
## Indent backward using Shift + TAB.

## To alow multiple line writing, Press Alt + Shift and drag.

## To get lorem ipsum demo text
   type lorem21   | here 21=number of words you want

## To get ,
    <li></li>
    <li></li>
    <li></li>
    Type li*3    
   
## To get,
    <div class="box outer">
        <div class="box inner"></div>
    </div>
    <div class="box outer">
        <div class="box inner"></div>
    </div>
    <div class="box outer">
        <div class="box inner"></div>
    </div>
    
   Type .box*3.outer>.box.inner
 
 ##To get ,
        <div class="grid">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
    </div>
  Type  .grid>.box$*3

# PHP
## Even if the condion of a do while loop is false it will execute for the first time.
## define('PI',3.14);//this is how to declare constant variable
## echo var_dump($variable1==3); // print type and value of the verable

## 2 way to solve "no database seleted" problem
1. $server= "localhost";
   $username = "root";
   $password = ""; $dbname = "trip"
   $con = mysqli_connect($server,$username,$password,$dbname);
   
   $sql= "INSERT INTO `table_name` (`name`, `age`) VALUES ('$name', '$age'));";

2. $server= "localhost";
   $username = "root";
   $password = "";   
   
   $sql= "INSERT INTO `database_name`.`table_name` (`name`, `age`) VALUES ('$name', '$age'));";
