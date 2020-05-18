<?php
if ($_COOKIE['name'] != NULL) { // IF USER IS LOGGED IN
	$conn = new mysqli('localhost', 'connection', 'student', 'NewLeaf');
	if ($conn->connect_error) {
		die('Error: ' .$conn->connect_error);
	} else {

		$sql = "SELECT email FROM cart";
		if ($result = $conn -> query($sql)) {
 			while ($row = $result -> fetch_row()) {
   			
  			}
  		$result -> free_result();
		}


	}
}
?>
