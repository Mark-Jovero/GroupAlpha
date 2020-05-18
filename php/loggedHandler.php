<?php 
$cookieName = $_COOKIE['name'];
if ($cookieName == NULL) {
	echo "Log In";
} else {
	echo "Hello, " . strtoupper(substr($cookieName, 0,1)) . strtolower(substr($cookieName, 1, strlen($cookieName)));
	echo "<div id='acclogout' onclick='loggOut()' class='accitems'>Log Out</div>";
	echo "<script>";
	echo "function loggOut() {";
	echo "document.cookie = 'name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';";
	echo "document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';";
	echo "document.cookie = 'ui2d=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';";
	echo "}";
	echo "</script>";
}


?>


