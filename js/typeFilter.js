var array = [];
var tracker = 0;
function loadTypes() {
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
}

function resetView() {
		resetStatus = 1;
		writeHere[0].innerHTML = "";
		defaultView();
}
	
function clearView() {
		resetStatus = 1;
		writeHere[0].innerHTML = "";
}

var writeCat = document.getElementsByClassName("item_type");
function writeCategories() {
	for (tracker; tracker < array.length; tracker++) {
		writeCat[0].innerHTML += "<div class=\'category\'>" + array[tracker] + "</div>";
	}
}	

function main() {
	loadTypes();
	loadTypes();
	loadTypes();
	// had to call loadTypes() multiple times.. for some reason it would not load properly sometimes.
	writeCategories();
}

document.addEventListener('mousemove', function() {
   main();
}, false);
