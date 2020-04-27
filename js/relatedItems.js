var clickStatus = 1; // 1 = enable write; 0 = disable
var MAX_DISPLAY_ITEMS = 4;
var indexToDelete;
var copyArr = [];
var isArrayType = false;
var type;
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
		var clickedType = clicked.type;
		isArrayType = Array.isArray(clickedType);
		
		if (isArrayType) {
			for (var i = 0; i < clickedType.length; i++) {
				clickedType[i] = clickedType[i].substr(0,1).toUpperCase() + clickedType[i].substr(1, clickedType[i].length).toLowerCase();
				//console.log(clickedType[i]);
				for (var j = 0; j < storeData.length; j++) {
					isArrayType = Array.isArray(storeData[j].type);
					if (isArrayType) {
						for (var l = 0; l < storeData[j].type.length; l++) {
							var storeTypes = storeData[j].type[l].substr(0,1).toUpperCase() + storeData[j].type[l].substr(1, storeData[j].type[l].length).toLowerCase();
							for (var t = 0; t < clickedType.length; t++) {
								if (clickedType[t] == storeTypes && !array.includes(storeData[j].keyID) && clicked.keyID != storeData[j].keyID) {
									array.push(storeData[j].keyID);
								}
							}
						}
					} else {
							var storeTypes = storeData[j].type.substr(0,1).toUpperCase() + storeData[j].type.substr(1, storeData[j].type.length).toLowerCase();
							isArrayType = Array.isArray(clickedType);
							if (isArrayType) {
								for (var t = 0; t < clickedType.length; t++) {
									if (clickedType[t] == storeTypes &&  !array.includes(storeData[j].keyID)) {
										array.push(storeData[j].keyID);
									}
								}
							} else {
								if (clickedType == storeTypes) {
									array.push(storeData[j].keyID);
								}	
							}
					}
				}
			}
		} else {
			clickedType = clickedType.substr(0,1).toUpperCase() + clickedType.substr(1, clickedType.length).toLowerCase();
			for (var j = 0; j < storeData.length; j++) {
				isArrayType = Array.isArray(storeData[j].type);
				if (isArrayType) {
					for (var l = 0; l < storeData[j].type.length;l++) {
						var storeTypes = storeData[j].type[l].substr(0,1).toUpperCase() + storeData[j].type[l].substr(1, storeData[j].type[l].length).toLowerCase();
						if (clickedType == storeTypes && !array.includes(storeData[j].keyID) && clicked.keyID != storeData[j].keyID) {
							array.push(storeData[j].keyID);
						}
					}
					
				} else {
					var storeTypes = storeData[j].type.substr(0,1).toUpperCase() + storeData[j].type.substr(1, storeData[j].type.length).toLowerCase();
					if (clickedType == storeTypes && !array.includes(storeData[j].keyID) && clicked.keyID != storeData[j].keyID) {
							array.push(storeData[j].keyID);
					}
				}
			}
		}

		console.log("SIMILAR: "  + array);
		return array;
	
	}
}

function testFunc(m) {
	var writeHere = document.getElementById("dispCol2");
	var writeHere2 = document.getElementById("dispCol1");
	//swaps
	console.log("!!");
	
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