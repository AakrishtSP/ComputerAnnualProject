<?php

$conn = mysqli_connect("localhost", "root", "", "computer_project");
$sql = "CREATE TABLE product(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    productName VARCHAR(255) NOT NULL,
    
)";
if ($conn->query($sql)){
    echo "Created DATABASE computer_project";
}else {
    echo "Failed to create DATABASE computer_project. Erroe: " . $conn->error;
}

?>