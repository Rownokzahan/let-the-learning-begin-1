<?php
    $msg= false;
    if (isset($_POST['name'])){
        // Set connection variables
        $server= "localhost";
        $username = "root";
        $password = "";
        // $dbname = "trip";
        // $con = mysqli_connect($server,$username,$password,$dbname);

        // Create database connection 
        $con = mysqli_connect($server,$username,$password);

        if (!$con){
            die("connection to this database failed due to" .
            mysqli_connect_error());
        }
        // echo "successfully connecting to the db";

        // Collect post variables
        $name = $_POST['name'];
        $age = $_POST['age'];
        $gender = $_POST['gender'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $des = $_POST['des'];
        
        // Execute the query
        $sql= "INSERT INTO `trip`.`trip` (`name`, `age`, `gender`, `email`, `phone`, `des`, `dt`) VALUES ('$name', '$age', '$gender', '$email', '$phone', '$des', current_timestamp());";


        if ($con->query($sql) == true){
            // echo "successfully inserted";

            // message for successful insertion
            $msg= true;
        }

        else{
            echo "Error: $sql <br> $con -> error";
        }

        // Close the database connection
        $con-> close();
    }    
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome To Travel Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img class="img" src="i.jpg" alt="">
    <div class="container">
        <h1>Welcome</h1>

        <?php
            if($msg == true){
                echo "<p><b>Thank you for submitting the form</b></P>";
            }
            else {
                echo "<p>Enter your details</p>";
            }
        ?>
        
        <form action="index.php" method="post">

            <input type="text" name="name" placeholder="Name" id="name"><br>
            <input type="number" name="age" placeholder="Age" id="age"> <br>
            <input type="text" name="gender" placeholder="Gender" id="gender"> <br>
            <input type="email" name="email" placeholder="Email" id="email"> <br>
            <input type="text" name="phone" placeholder="Phone Number" id="phone"><br>
            <textarea name="des" id="des" cols="30" rows="10" placeholder="Enter any other informaton here" ></textarea><br>
            <button class="btn">Summit</button>
            <button class="btn">Reset</button>

        </form>
    </div>
    <script src="index.js"></script>
</body>
</html>



