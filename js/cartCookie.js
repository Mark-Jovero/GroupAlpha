var deleteCookie = "expires=Thu, 18 Dec 2013 12:00:00 UTC";
var longExpire = "expires=Sun, 1 Jan 2900 12:00:00 UTC";
document.onmousemove = function() {
	var cookieArray = [];
	
	cookieArray = toArray(document.cookie);
	var updatedCartItems = cookieArray[0];
	console.log("UPL: " + updatedCartItems);
	if (isNaN(updatedCartItems)) {
		//updatedCartItems = 0;
	}
	
	if (cookieArray[0] != totalCartItems) {
		cookieArray[0] = cookieArray[0]
	}
	document.cookie = "itemCount="+cookieArray[0]+";"+longExpire;
	console.log(cookieArray);
	console.log(document.cookie);
	
}

//transfer cookie string into array. 
function toArray(cookieString) {
	var array = [];
	var countVars = 0;
	for (var i = 0; i < cookieString.length; i++) {
		if(cookieString[i] == "=") {
			countVars++;
			if(!isNaN(cookieString.substr(i+1, cookieString.indexOf(";", i)-i-1))) {
				array.push(parseInt(cookieString.substr(i+1, cookieString.indexOf(";", i)-i-1)));
			}
		}
	}
	
	return array;
}
