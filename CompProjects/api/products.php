<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json; charset=UTF-8");

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = "computer_project";
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if(!$conn){
    die('Database connection error : ' .$conn->error);
}

$sql = "SELECT * FROM products ORDER BY RAND() LIMIT 10;";

$result = mysqli_query($conn, $sql) or die("Error in Selecting " . $conn->error);

//create an array
$products = array();
while($row =mysqli_fetch_assoc($result)){
    $products[] = $row;
}

echo json_encode($products);

?> 