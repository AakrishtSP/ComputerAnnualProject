<?php

$conn = mysqli_connect("localhost", "root", "");
$sql = "CREATE DATABASE computer_project";
if ($conn->query($sql)){
    echo "Created DATABASE computer_project";
}else {
    echo "Failed to create DATABASE computer_project. Erroe: " . $conn->error;
}


?>