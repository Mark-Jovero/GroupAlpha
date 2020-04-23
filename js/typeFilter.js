var array = [];
var tracker = 0;
function loadTypes() {
	console.log("Loading item types...");
	for (var i = 0; i < data.length; i++) {
		var fixedCase = data[i].type;
		fixedCase = fixedCase.substring(0,1).toUpperCase() + data[i].type.substring(1, data[i].type.length);
		if (array.length > 0) { // not empty
			if (array.indexOf(fixedCase) == -1) { // if array does not contain category
				array.push(fixedCase);
			}
		} else {
			array.push(fixedCase);
		}
	}
	array.sort();
	console.log("Item types loaded.");
}

function resetView() {
		resetStatus = 1;
		writeHere[0].innerHTML = "";
		console.log("resetView() called");
		defaultView();
}
	
function clearView() {
		resetStatus = 1;
		writeHere[0].innerHTML = "";
		console.log("clearView() called");
}

var writeCat = document.getElementsByClassName("item_type");
function writeCategories() {
	console.log("Writing item types to div...");
	for (tracker; tracker < array.length; tracker++) {
		writeCat[0].innerHTML += "<div class=\'category\'>" + array[tracker] + "</div>";
	}
	console.log("Item types written.");
}	

function main() {
	loadTypes();
	loadTypes();
	loadTypes();
	// had to call loadTypes() multiple times.. for some reason it would not load properly sometimes.
	writeCategories();
}

document.onload = function() {
	main();
}

window.onload = function() {
	main();
}