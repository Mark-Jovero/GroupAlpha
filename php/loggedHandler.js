document.onmousemove = function() {
var logOut = document.getElementById("acclogout");

logOut.onclick = function() {
	console.log("Logging out.");
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "ui2d=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	console.log(document.cookie);
	window.location.pathname = '/';
	return false;
}
}

function loggOut() {
	console.log("Logging out.");
	document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "ui2d=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	console.log(document.cookie);
	window.location.pathname = '/';
	return false;
}
