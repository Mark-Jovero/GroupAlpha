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
		writeCat[0].innerHTML += "<div class=\'category\' onclick=\'getClass(this)\'>" + array[tracker] + "</div>";
	}
}

function main() {
	loadTypes();
	writeCategories();
	
}
var categs = document.getElementsByClassName("category");
function getClass(m) {
	var itemsDisplayed = 0;
	writeHere[0].innerHTML = "";
	var displayCategoryItems = m.textContent;
	for (var i = 0; i < storeData.length; i++) {
		var fixedCase = storeData[i].type;
		var description = data[i].desc;
		if (description.length > 30) {
			var tempo = description.substring(20,description.length);
			var spaceLoc = 20 + tempo.search(" ");
			description = description.substring(0, spaceLoc) + "... <font id=\'longDescButton\' color=\'blue\'>[more]</font>";
		}
		fixedCase = fixedCase.substring(0,1).toUpperCase() + storeData[i].type.substring(1, storeData[i].type.length);
		if (fixedCase == displayCategoryItems) {
			itemsDisplayed++;
			writeHere[0].innerHTML += "<div class=\'items\' id=\'" + storeData[i].keyID + "\'>"
			 		 + "<img src=\'" + storeData[i].src + "\'/>"
					 + "<div class=\'item-name\'><hr><b><font size=\'5\'>" + storeData[i].name + "</font></b><br>"
					 + description + "</div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + storeData[i].price + "</div></div>"
					 + "</div>";
		}
	}
	if (itemsDisplayed < ITEMS_PER_PAGE) {
		hideShowMore();
	}
	
}

document.addEventListener('mousemove', function() {
   main();
   
}, false);
