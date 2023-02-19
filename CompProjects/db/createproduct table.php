<?php

$conn = mysqli_connect("localhost", "root", "", "computer_project");

$sql = "CREATE TABLE products (
            id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
            product VARCHAR(50) NOT NULL DEFAULT 'iPhone' COMMENT 'iPhone, Macbook, iPad, Others' ,
            name VARCHAR(255) NOT NULL , description TEXT NULL DEFAULT NULL ,
            image BLOB NULL DEFAULT NULL ,
            price INT UNSIGNED NOT NULL DEFAULT '1000')
";

if ($conn->query($sql)){
    echo "Created TABLE product";
} else {
    echo "Failed to create product user. Error: " . $conn->error;
}

?>
