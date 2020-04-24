var clickStatus = 1; // 1 = enable write; 0 = disable
var MAX_DISPLAY_ITEMS = 4;
window.onclick = function() {
	var clickedItem = data[clickedExport];
	var writeHere = document.getElementById("dispCol2");
	var similarItems = [];
	
	item_x_display.onclick = function() {
		clickStatus = 1;
		dispCol2.innerHTML = " ";
		item_display_overlay.style.display = "none";
		window.onscroll=function(){};
	}
	
	
	if (clickStatus == 1) {
		similarItemsArray = getSimilarItems(clickedItem);
			// appends similar items
	var temp = MAX_DISPLAY_ITEMS;
	dispCol2.innerHTML = "<div id=\'item0\'>Related Items</div>";
		while (similarItemsArray.length > 0 && temp > 0) {
			var indexToDelete = randomInt(similarItemsArray.length);
			dispCol2.innerHTML += "<div id=\'item" + temp + "\'><img src=\'" + data[similarItemsArray[indexToDelete]].src + "\'/>"
				+ "<div id=\'item-name\'>" +  data[similarItemsArray[indexToDelete]].name + "</div></div>";
			similarItemsArray.splice(indexToDelete, 1);
			temp--;
		}
	}
	
	if (item_display_overlay.style.display == "block") {
		clickStatus = 0;
	}
	
	function getSimilarItems(clicked) {
		var array = [];
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			if (item.type == clicked.type && item.keyID != clicked.keyID) {
				array.push(data[i].keyID);
			}
		}
		console.log(array);
		return array;
	
	}
}

var buyButton = document.getElementsByClassName("item-price");

buyButton.onclick = function() {
	console.log("CLICK!");
}

function randomInt(max) {
	var random = Math.floor(Math.random() * Math.floor(max));
	if ((random >= max)) {
		random = randomInt(max);
	}
	return random;
}