var arrayCat = [];
var tracker = 0;
var colorOn = "#676e89";
var type;
var isArrayType = false;
var firstTimeLoad = true;
var nameValue;
var buyFormButton;
function loadTypes() {
	for (var i = 0; i < storeData.length; i++) {
		isArrayType = Array.isArray(storeData[i].type);
		if (isArrayType) {
			for (var j = 0; j < storeData[i].type.length; j++) {
				type = storeData[i].type[j].substr(0,1).toUpperCase() + storeData[i].type[j].substr(1, storeData[i].type[j].length).toLowerCase();
				if (!arrayCat.includes(type)) {
					arrayCat.push(type);
					console.log(arrayCat);
				}
			}
		} else {
			type = storeData[i].type.substr(0,1).toUpperCase() + storeData[i].type.substr(1, storeData[i].type.length).toLowerCase();
			if (!arrayCat.includes(type)) {
					arrayCat.push(type);
					console.log(arrayCat);
			}
		}
	}
	
	arrayCat.sort();
}

var writeCat = document.getElementsByClassName("item_type");
function displayTypes() {
	for (tracker; tracker < arrayCat.length; tracker++) {
		//var fixedCase = fixedCase.substring(0,1).toUpperCase() + storeData[i].type.substring(1, storeData[i].type.length);
		writeCat[0].innerHTML += "<div class=\'category\' onclick=\'getTypeItems(this)\'>" + arrayCat[tracker] + "</div>";
	}
}

function getTypeItems(category) {
	writeHere[0].innerHTML = "";
	var clickedCategory = category.textContent;
	for (var i = 0; i < storeData.length; i++) {
		isArrayType = Array.isArray(storeData[i].type);
		//isArrayType = Array.isArray(storeData[i].type);
		if (isArrayType) {
			for (var j = 0; j < storeData[i].type.length; j++) {
				type = storeData[i].type[j].substr(0,1).toUpperCase() + storeData[i].type[j].substr(1, storeData[i].type[j].length).toLowerCase();
				var description = data[i].desc;
				if (description.length > 30) {
					var tempo = description.substring(20,description.length);
					var spaceLoc = 20 + tempo.search(" ");
					description = description.substring(0, spaceLoc) + "... <font id=\'longDescButton\' color=\'blue\'>[more]</font>";
				}
				if (clickedCategory == type) {
					writeHere[0].innerHTML += "<div class=\'items\' id=\'" + storeData[i].keyID + "\' onclick=\'test(this.id)\'>"
			 		 + "<img src=\'" + storeData[i].src + "\'/>"
					 + "<div class=\'item-name\'><b><font size=\'5\'>" + storeData[i].name + "</font></b><br>"
					 + description + "</div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + storeData[i].price + "</div></div>"
					 + "</div>";
				}
			}
		} else {
			type = storeData[i].type.substr(0,1).toUpperCase() + storeData[i].type.substr(1, storeData[i].type.length).toLowerCase();
			if (clickedCategory == type) {
				var description = data[i].desc;
				if (description.length > 30) {
					var tempo = description.substring(20,description.length);
					var spaceLoc = 20 + tempo.search(" ");
					description = description.substring(0, spaceLoc) + "... <font id=\'longDescButton\' color=\'blue\'>[more]</font>";
				}
				writeHere[0].innerHTML += "<div class=\'items\' id=\'" + storeData[i].keyID + "\' onclick=\'test(this.id)\'>"
			 		 + "<img src=\'" + storeData[i].src + "\'/>"
					 + "<div class=\'item-name\'><b><font size=\'5\'>" + storeData[i].name + "</font></b><br>"
					 + description + "</div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + storeData[i].price + "</div></div>"
					 + "</div>";
			}
		}
	}
}

function test(m) {
	clickedExport = m;
	item_display_content.innerHTML = "<div id=\'dispCol1\'><img src=\'" + storeData[clickedExport].src
		+ "\'><br><b> <h1>" + storeData[clickedExport].name
		+ "</b></h1>" + storeData[clickedExport].desc
		+ "<br><b> Price: $" + storeData[clickedExport].price  
		+ "</b><br><br><div id=\'buy_form\'><form>" + 
		"<label for=\'quantity\'>Quantity</label><input type=\'number\' min=\'0\' max=\'100\' value=\'0\' id=\'quantity\' name=\'quantity\' onkeypress=\'return event.keyCode != 13;\'></form></div>"//disables enter input
	+	"<div class=\'item-price\'>Add To Cart</div></div><div id=\'dispCol2\'></b><div>";

	item_display_overlay.style.display = "block";
	nameValue = document.getElementById("quantity").value;
	buyFormButton = document.getElementsByClassName("item-price");
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

document.addEventListener('mousemove', function() {
	

	if (firstTimeLoad == true) {
		loadTypes();
   		displayTypes();
   		firstTimeLoad = false;
  	 }
  	 
  	 item_display_overlay.onmouseover = function() {
		nameValue = document.getElementById("quantity").value;
		if (nameValue <= 0) {
			buyFormButton[0].style.backgroundColor = "gray";
			buyFormButton[0].style.color = "black";
			buyFormButton[0].style.cursor = "not-allowed";
			buyFormButton[0].style.boxShadow = "none";
		} else {
			buyFormButton[0].style.backgroundColor = "#8288a1";
			buyFormButton[0].style.color = "white";
			buyFormButton[0].style.cursor = "pointer";
			buyFormButton[0].style.boxShadow = "0 1px 5px 0px rgba(0, 0, 0, 0.5)";
		}
	}
}, false);
