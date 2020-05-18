var SET_EXPIRED = "Thu, 01 Jan 1970 00:00:00 GMT";
var cookies;

function createCookie() {
	cookies = document.cookie;
}

function deleteCookie() {
	document.cookie = "itemCount=0; expired=" + SET_EXPIRED;
	alert(document.cookie);
}

createCookie();
deleteCookie();