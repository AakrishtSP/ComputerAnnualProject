<?php

$conn = mysqli_connect("localhost", "root", "", "computer_project");

$sql = "CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    dateofbirth DATE NOT NULL,
    password VARCHAR(255) NOT NULL
);";

if ($conn->query($sql)){
    echo "Created TABLE user";
} else {
    echo "Failed to create TABLE user. Error: " . $conn->error;
}

?>