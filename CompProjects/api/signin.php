<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');
header("Content-Type: application/json; charset=UTF-8");

// Create a new mysqli object to connect to the database
$conn = new mysqli('localhost', 'root', '', 'computer_project');

// Check if there's an error in connecting to the database
if($conn->connect_error) {
  die('Could not connect to the database');
}

// Get the JSON data from the request body
$json = file_get_contents('php://input');

// Decode the JSON data into an associative array
$postdata = json_decode($json, true);

// Create a response array to hold the result of the operation
$response = array();

// Set the error flag to false initially
$response['error'] = false;

// Sanitize and validate the input data
$name = trim($postdata['name']);
$phone = trim($postdata['phone']);
$gender = trim($postdata['gender']);
$email = trim($postdata['email']);
$password = trim($postdata['password']);
$cpassword = trim($postdata['cpassword']);
$birth = date_format(date_create($postdata['birth']),"Y-m-d");

// Validate the email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  $response['error'] = true;
  $response['message'] = "Invalid email format";
  echo json_encode($response);
  die();
}

// Check if the email already exists in the database
$emailCheckQuery = "SELECT * FROM user WHERE email=?";
$emailCheckStmt = $conn->prepare($emailCheckQuery);
$emailCheckStmt->bind_param("s", $email);
$emailCheckStmt->execute();
$emailCheckResult = $emailCheckStmt->get_result();

if ($emailCheckResult->num_rows > 0) {
  $response['error'] = true;
  $response['message'] = "Email already exists";
  echo json_encode($response);
  die();
}

// Check if the phone number already exists in the database
$phoneCheckQuery = "SELECT * FROM user WHERE phone=?";
$phoneCheckStmt = $conn->prepare($phoneCheckQuery);
$phoneCheckStmt->bind_param("s", $phone);
$phoneCheckStmt->execute();
$phoneCheckResult = $phoneCheckStmt->get_result();

if ($phoneCheckResult->num_rows > 0) {
  $response['error'] = true;
  $response['message'] = "Phone number already exists";
  echo json_encode($response);
  die();
}

// Check if the password and confirm password match
if ($password !== $cpassword) {
  $response['error'] = true;
  $response['message'] = "Password and Confirm Password do not match";
  echo json_encode($response);
  die();
}

// Prepare the insert query with parameterized values
$insertQuery = "INSERT INTO user(name, phone, gender, email, password, dateofbirth) VALUES(?, ?, ?, ?, ?, ?)";
$insertStmt = $conn->prepare($insertQuery);
$insertStmt->bind_param("ssssss", $name, $phone, $gender, $email, $password, $birth);

// Execute the insert query
if ($insertStmt->execute()) {
  $response['message'] = 'New record inserted successfully';
} else {
  $response['error'] = true;
  $response['message'] = $conn->error;
}

// Close the database connection
$conn->close();

// Send the response as a JSON
echo json_encode($response);
die();
?>