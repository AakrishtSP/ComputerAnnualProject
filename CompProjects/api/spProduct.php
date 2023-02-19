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

$json = file_get_contents('php://input');
// Decode the JSON data into an associative array
$postdata = json_decode($json, true);

$product = $postdata['item'];

$sql = "SELECT * FROM products WHERE product=?";
$stmt = $conn->prepare($sql);

// Bind the email parameter to the prepared statement
$stmt->bind_param("s", $product);

$stmt->execute();

$result = $stmt->get_result() or die("Error in Selecting " . $conn->error);

//create an array
$products = array();
while($row =mysqli_fetch_assoc($result)){
    $products[] = $row;
}

echo json_encode($products);
die();
?>