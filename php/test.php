<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = "test";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if(!$connection){
    die('Database connection error : ' .$conn->error);
}

$sql = "SELECT * FROM technologies";

$result = mysqli_query($conn, $sql) or die("Error in Selecting " . $conn->error);

//create an array
$techarray = array();
while($row =mysqli_fetch_assoc($result)){
    $techarray[] = $row;
}

echo json_encode($techarray);

?> 