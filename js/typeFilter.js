var array = [];
function loadTypes() {
	for (var i = 0; i < data.length; i++) {
		if (array.length > 0) { // not empty
			if (array.indexOf(data[i].type) == -1) { // if array does not contain category
				array.push(data[i].type);
			}
		} else {
			array.push(data[i].type);
		}
	}
	array.sort();
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
	for (var i = 0; i < array.length; i++) {
		writeCat[0].innerHTML += "<div class=\'category\'>" + array[i] + "</div>";
	}
}	

function main() {
	loadTypes();
	writeCategories();
}

window.onload = function() {
	main();
}