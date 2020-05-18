<?php 


	$email = $_POST['email'];
	$password = $_POST['password'];
	$link = mysqli_connect('localhost', 'connection', 'student', 'NewLeaf');

$conn = new mysqli('localhost', 'connection', 'student', 'NewLeaf');
if ($conn->connect_error) {
	die('Error: ' .$conn->connect_error);
} else {

	$logged = FALSE;
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
				$logged = TRUE;
							
			} else {
				header( "Location: ../forms/invlogin.html" );		
			}

  		}
  	$result -> free_result();
	} else {header( "Location: ../forms/invlogin.html" );	} // invalid

	$sql = "SELECT firstName FROM users WHERE email='" . $email . "'";
	$first = "";
	if ($logged && $result = $conn -> query($sql)) {
 		while ($row = $result -> fetch_row()) {

			$first = $row[0];
  		}
  	$result -> free_result();
	} 

	$random = random_bytes(50);
	$sql = "UPDATE users SET uniqueID='" . $random . "' WHERE email='" . $email . "'";
	if ($logged == TRUE && $result = $conn -> query($sql)) {
		setcookie("ui2d",$random,time()+1000320*3424,'/;samesite=none');
		setcookie("name",$first,time()+1000320*3424,'/;samesite=none');
		header( "Location: ../index.html" );
	}
}

?>
