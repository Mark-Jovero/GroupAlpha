<?php 
	$firstName = $_POST['firstName'];
	$lastName = $_POST['lastName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
	$link = mysqli_connect('localhost', 'connection', 'student', 'NewLeaf');

$conn = new mysqli('localhost', 'connection', 'student', 'NewLeaf');
if ($conn->connect_error) {
	die('Error: ' .$conn->connect_error);
} else {
	
	//Check if email exists in database
	$emailExists = FALSE;
	$sql = "SELECT email FROM users";
	if ($result = $conn -> query($sql)) {
 		while ($row = $result -> fetch_row()) {
   			//printf ("%s\n", $row[0]);
			if ($email == $row[0]) {
				$emailExists = TRUE;	
			}
  		}
  	$result -> free_result();
	}
	
	if ($emailExists == FALSE) {
		$sts = $conn->prepare("Insert into users(firstName, lastName, email, 				password) VALUES(?,?,?,?)");
		$sts->bind_param("ssss", $firstName, $lastName, $email, $password);
		$sts->execute();
		$sts->close();
		$conn->close();
	} else {
		header("Location: ../index.html");
		exit;
	}
}

?>
