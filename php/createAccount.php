<?php 
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$password = $_POST['password'];

$conn = new mysqli('localhost', 'connection', 'student', 'NewLeaf');
if ($conn->connect_error) {
	die('!sd!' .$conn->connect_error);
} else {
	$sts = $conn->prepare("Insert into users(firstName, lastName, email, password) VALUES(?,?,?,?)");
	$sts->bind_param("ssss", $firstName, $lastName, $email, $password);
	$sts->execute();
	$sts->close();
	$conn->close();
}
?>
