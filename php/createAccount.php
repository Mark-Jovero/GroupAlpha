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
			if (strtolower($email) == strtolower($row[0])) {
				$emailExists = TRUE;	
			}
  		}
  	$result -> free_result();
	}
	
	if ($emailExists == FALSE) {
		$sts = $conn->prepare("Insert into users(firstName, lastName, email, 				password) VALUES(?,?,?,?)");
		$sts->bind_param("ssss", $firstName, $lastName, $email, $password);
		$pagecontents = file_get_contents("phpResultPages/AccountCreated.html");
		$addTo = "<h2>Hello, ". $firstName;
		$addTo .= "</h2><h3>Your account was successfully created!</h3>";
		$addTo .= "Email used: " . $email;
		$addTo .= "<br>Check your email to confirm your account.";
		$addTo .= " <br>You can now <a href=\'../../forms/login.html>log in!</a>";
		$pagecontents = str_replace("WriteHere001", $addTo , $pagecontents);
		echo $pagecontents;
		$sts->execute();
		$sts->close();
		$conn->close();
	} else {
		$pagecontents = file_get_contents("phpResultPages/AccountCreated.html");
		$pagecontents = str_replace("<title>Account Created!</title>", "<title>Unable to Create Account</title>", $pagecontents);


		$addTo = "<h2>There was a problem creating your account.</h2> The email you've entered (";
		$addTo .= $email;
		$addTo .= ") is already in use. <br>Please try again or contact support to reset your password.";
		$pagecontents = str_replace("WriteHere001", $addTo , $pagecontents);
		echo $pagecontents;
		exit;
	}
}

?>
