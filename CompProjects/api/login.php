<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli('localhost', 'root', '', 'computer_project');
if ($conn->connect_error) {
  die('Could not connect to the database');
}

$json = file_get_contents('php://input');

// Decode the JSON data into an associative array
$postdata = json_decode($json, true);

$response['error'] = false;
$email = $postdata['email'];
$password = $postdata['password'];

// Prepare the SQL statement using a prepared statement
$sql = "SELECT * FROM user WHERE email=?";
$stmt = $conn->prepare($sql);

// Bind the email parameter to the prepared statement
$stmt->bind_param("s", $email);

$stmt->execute();
$result = $stmt->get_result();

if (mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);

  // Check if the password matches
  if ($password === $row['password']) {
    $response['error'] = false;
    $response['message'] = "Logged in successfully \nWelcome! " . $row['name'];
  } else {
    $response['error'] = true;
    $response['message'] = "Incorrect password";
  }
} else {
  $response['error'] = true;
  $response['message'] = "Email does not exist";
}

$stmt->close();
$conn->close();

echo json_encode($response);
die();
?>
