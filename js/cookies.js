function saveCookies() {
	var fullname = document.getElementById("fullname");
	var address = document.getElementById("Address");
	var address1 = document.getElementById("Address1");
	var city = document.getElementById("City");
	var state = document.getElementById("State");
	var zip = document.getElementById("Postal");
	
	document.cookie = "fullname=" + fullname.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
	document.cookie = "address=" + address.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
	document.cookie = "address1=" + address1.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
	document.cookie = "city=" + city.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
	document.cookie = "fullname=" + fullname.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
	document.cookie = "state=" + state.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
	document.cookie = "zip=" + zip.value + "; expires=Thu, 18 Dec 2100 12:00:00 UTC";
}
