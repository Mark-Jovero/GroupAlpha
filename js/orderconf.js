


var hasLoaded = 0; 
window.onmousemove = function() {
var writeHere = document.getElementsByClassName("writeInfoHere");
	writeHere[0].innerHTML = "<table>";
		writeHere[0].innerHTML += "<tr>";
			writeHere[0].innerHTML += "<td>";
			writeHere[0].innerHTML += "<b>Name: </b>";
			writeHere[0].innerHTML += "</td>";
			writeHere[0].innerHTML += "<td>";
			writeHere[0].innerHTML += "" + getCookie("fullname")+ "";
			writeHere[0].innerHTML += "</td>";
		writeHere[0].innerHTML += "</tr>";
		
		writeHere[0].innerHTML += "<br><tr>";
			writeHere[0].innerHTML += "<td>";
			writeHere[0].innerHTML += "<b>Address:</b> ";
			writeHere[0].innerHTML += "</td>";
			writeHere[0].innerHTML += "<td>";
			writeHere[0].innerHTML += "<br>" + getCookie("address") + "<br>" +getCookie("city") +  ", " +getCookie("state") + ", " + getCookie("zip");
			writeHere[0].innerHTML += "</td>";
		writeHere[0].innerHTML += "</tr>";
	writeHere[0].innerHTML += "</table>";
	
	document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "fullname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "address=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "address1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "city=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	document.cookie = "zip=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getCookie(name) {
	var result = "";
	var count = 0;
	if (document.cookie.indexOf(name+"=") == -1) {return null}
	for (var i = document.cookie.indexOf(name+"=")+name.length+1; i < document.cookie.length; i++) {
		if (document.cookie[i] != ";"){result += document.cookie[i];}
		else {break}
	}
	return result;
}
