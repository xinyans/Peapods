<?php
$servername = "localhost";
$username = "moo";
$password = "cows";
$database = "peapods";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>