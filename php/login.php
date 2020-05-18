<?php 
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
			if (strtolower($email) == strtolower($row[0])) {
				$emailExists = TRUE;
			}
  		}
  	$result -> free_result();
	}
	
	$sql = "SELECT password FROM users WHERE email='" . $email . "'";
	if ($emailExists && $result = $conn -> query($sql)) {
 		while ($row = $result -> fetch_row()) {

			if ($password == $row[0]) {
				echo "Login successful!";			
			} else {
				echo "Login information was invalid.";			
			}

  		}
  	$result -> free_result();
	} else {echo "Login information was invalid.";	}

	
}

?>
