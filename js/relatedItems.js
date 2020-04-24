var clickStatus = 1; // 1 = enable write; 0 = disable
var MAX_DISPLAY_ITEMS = 4;
var indexToDelete;
var copyArr = [];
window.onclick = function ds() {
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
	copyArr = [];
	dispCol2.innerHTML = "<div id=\'item0\'>Related Items</div>";
		while (similarItemsArray.length > 0 && temp > 0) {
			var indexToDelete = randomInt(similarItemsArray.length);
			copyArr.push(data[similarItemsArray[indexToDelete]].keyID);
			dispCol2.innerHTML += "<div id=\'item" + temp + "\' onclick=\'testFunc(this)\'><img src=\'" + data[similarItemsArray[indexToDelete]].src + "\'/>"
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
		return array;
	
	}
}

function testFunc(m) {
	var writeHere = document.getElementById("dispCol2");
	var writeHere2 = document.getElementById("dispCol1");
	//swaps

	
	var index = parseInt(m.id.substring(4,5))-1;
	if (index == 3){
		index = 0;
	} else if (index == 0) {
		index = 3;
	}else if (index == 1) {
		index = 2;
	} else if (index == 2) {
		index = 1;
	}
	console.log(index);
	clickedExport = storeData[copyArr[index]].keyID;
	writeHere2.innerHTML = "<div id=\'\'><img src=\'" + storeData[clickedExport].src
		+ "\'><br><b> <h1>" + storeData[clickedExport].name
		+ "</b></h1>" + storeData[clickedExport].desc
		+ "<br><b> Price: $" + storeData[clickedExport].price  
		+ "</b><br><br><div id=\'buy_form\'><form>" + 
		"<label for=\'quantity\'>Quantity</label><input type=\'number\' min=\'0\' max=\'100\' value=\'0\' id=\'quantity\' name=\'quantity\' onkeypress=\'return event.keyCode != 13;\'></form></div>"//disables enter input
		+	"<div class=\'item-price\'>Add To Cart</div></div><div>";
		
}

function randomInt(max) {
	var random = Math.floor(Math.random() * Math.floor(max));
	if ((random >= max)) {
		random = randomInt(max);
	}
	return random;
}