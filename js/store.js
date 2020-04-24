var data = 0;
var b = 0;
var count = 1;
var itemCount = 0;
var writeHere = document.getElementsByClassName("content");
var showMore = document.getElementsByClassName("shop_nav_container");
var reset = document.getElementsByClassName("reset");
var highest = document.getElementById("highest");
var lowest = document.getElementById("lowest");
var priceDivSort = document.getElementsByClassName("price");
var myDivs = document.getElementsByClassName('items');
var ITEMS_PER_PAGE = 16;
var nameValue = 0;
var dispCol1 = document.getElementById("dispCol1");
var item_x_display;
var item_display;
var item_display_overlay;
var item_display_content;
var priceState = -1;
var pl;
var clickedExport = 0;
var data;
var buyFormButton;

	function displayShowMore() {
		showMore[0].style.display = "block";
		console.log("displayShowMore() called");
	}
	function hideShowMore() {
		showMore[0].style.display = "none";
		console.log("hideShowMore() called");
	}

window.onload = function e() {
	data = storeData;
	pl = data;
	var pageNum = 1;
	var lastPage = Math.ceil(itemCount / ITEMS_PER_PAGE);
	var pageLocation = 1;
	var displayedItems = 0;
	var getSortDropDownItems = document.getElementsByClassName("dropdown");
	item_x_display = document.getElementById("x-button");
	item_display = document.getElementById("itemInfoPopUp");
	item_display_overlay = document.getElementById("popupCover");
	item_display_content = document.getElementById("itemInfoContent");
	var resetStatus = 0;
	var clickedItemID = 0;
	itemCount = data.length;
	
	function getItemCount() {
		return itemCount;
	}
	
	function pageLocation() {
		return pageLocation;
	}
	
	function displayedItems() {
		return displayedItems;
	}
	
	function getKey(index) {
		if (index < data.length) {
			return data[index].key;
		}
		return -1;
	}
	
	function sortHighest() {
		var list = new Array();

		
		//Push keys to array
		var i = 0;
		for (i; i < data.length; i++) {
			list.push(i);
		}
		
		var pos = 0;
		//selection sort
		for (var i = 0; i < list.length; i++) {
			var current = data[list[i]].price;
			var highestVal = 0;
			var highestValLoc;
			//console.log("List is now: " + list);
			for (var j = i; j < list.length; j++) {
				var nextItem = data[list[j]].price;
				if (i != j) {
					//console.log(current + " - " + nextItem);
					if (current < nextItem && highestVal < nextItem) {
						//swap
						var temp = list[j];
						list[j] = list[i];
						list[i] = temp;
						highestVal = nextItem;
						highestValLoc = j;
					}
				}
			}
		}
		console.log("sortHighest() called; return: " + list);
		return list;
	}
	
	function sortLowest() {
		var lowest = sortHighest();
		lowest.reverse();
		console.log("sortLowest() called; return: " + lowest);
		return lowest;
	}
	
	var i = 0;
	function defaultView() {
	//console.log(data[0].keyID);
		if (resetStatus == 1) {
			resetStatus = 0;
			i = 0;
			pageLocation = 1;
		}
		if (getItemCount() > 0) {
			if (getItemCount() > ITEMS_PER_PAGE) {
				displayShowMore();
			}
				while (i+1 <= getItemCount() && i+1 <= pageLocation*ITEMS_PER_PAGE) {
				//console.log(data[i]);
				var itemPrice = data[i].price;
				
				var description = data[i].desc;
				if (description.length > 30) {
					var tempo = description.substring(20,description.length);
					var spaceLoc = 20 + tempo.search(" ");
					description = description.substring(0, spaceLoc) + "... <font id=\'longDescButton\' color=\'blue\'>[more]</font>";
				}
					writeHere[0].innerHTML += "<div class=\'items\' id=\'" + data[i].keyID + "\'>"
			 		 + "<img src=\'" + data[i].src + "\'/>"
					 + "<div class=\'item-name\'><hr><b><font size=\'5\'>" + data[i].name + "</font></b><br>"
					 + description + "</div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + itemPrice + "</div></div>"
					 + "</div>";
					i++;
					for(var p = 0; p < myDivs.length; p++) {
          				myDivs[p].addEventListener('click', function (event) {
          				clickedItemID = this.id;
          				//console.log(this.id);
						item_display_overlay.style.display = "block";
						clickedExport = data[clickedItemID].keyID;
						displayPopUp(clickedItemID);
						nameValue = document.getElementById("quantity").value;
						buyFormButton = document.getElementsByClassName("item-price");
						var formDiv = document.getElementById("buy_form");
						console.log(nameValue + "---");
						formDiv.onclick = function() {
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
						item_display_overlay.onmouseover = function() {
							nameValue = document.getElementById("quantity").value;
							if (nameValue > 0) {
								if (formActive == 1) {
									buyFormButton[0].style.backgroundColor = "#8288a1";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.boxShadow = "0 1px 3px 0px rgba(0, 0, 0, 0.5)";
									formActive = 0;
								}
								buyFormButton[0].onmouseover = function() {
									buyFormButton[0].style.backgroundColor = "#B4B7C6";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.cursor = "pointer";
									buyFormButton[0].style.boxShadow = "0 2px 5px 0px rgba(0, 0, 0, 0.5)";
								}
								buyFormButton[0].onmouseout = function() {
									buyFormButton[0].style.backgroundColor = "#8288a1";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.cursor = "pointer";
									buyFormButton[0].style.boxShadow = "0 1px 3px 0px rgba(0, 0, 0, 0.5)";
								}
							} else {
								formActive = 1;
								buyFormButton[0].style.backgroundColor = "gray";
								buyFormButton[0].style.cursor = "not-allowed";
								buyFormButton[0].style.color = "black";
								buyFormButton[0].style.boxShadow = "none";
							}
						}
						
						dispCol1 = document.getElementById("dispCol1");
						if (data[clickedItemID].desc.length > 300) {
							dispCol1.style.overflowY = "scroll";
						}
						
						disableScrolling();
           			 });
       				 } 
				}
		}
		showMore[0].onclick = function() {
			pageLocation += 1;
			defaultView();
			if (i+1 > itemCount) {
				hideShowMore();
			}
		}
		if (itemCount == 0) { // store is empty
			writeHere[0].innerHTML = "The store is empty. Please come back soon!";
		}
	}
	
	
	function highestView() {
		clearView();
		if (getItemCount() > ITEMS_PER_PAGE) {
			displayShowMore();
		}
		var sorted = sortHighest();
		var i = 0;
		console.log(data[sorted[i]].src);
		while(i+1 <= sorted.length && i+1 <= pageLocation*ITEMS_PER_PAGE) {
			var description = data[sorted[i]].desc;
				if (description.length > 30) {
					var tempo = description.substring(20,description.length);
					var spaceLoc = 20 + tempo.search(" ");
					description = description.substring(0, spaceLoc) + "... <font id=\'longDescButton\' color=\'blue\'>[more]</font>";
				}
			writeHere[0].innerHTML += "<div class=\'items\' id=\'" + data[i].keyID + "\'>"
			 		 + "<img src=\'" + data[sorted[i]].src+ "\'/>"
					 + "<div class=\'item-name\'><hr><b><font size=\'5\'>" + data[sorted[i]].name + "</font></b><br>"
					  + description + "</div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + data[sorted[i]].price + "</div></div>"
					 + "</div>";
					 
			i++;
			for(var p = 0; p < myDivs.length; p++) {
          				myDivs[p].addEventListener('click', function (event) {
          				clickedItemID = data[sorted[this.id]].keyID;
          				console.log(data[clickedItemID].keyID);
          				clickedExport = data[clickedItemID].keyID;
						item_display_overlay.style.display = "block";					
						displayPopUp(clickedItemID);
						nameValue = document.getElementById("quantity").value;
						buyFormButton = document.getElementsByClassName("item-price");
						var formDiv = document.getElementById("buy_form");
						var formActive = 1;
						console.log(nameValue + "---");
						formDiv.onclick = function() {
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
						item_display_overlay.onmouseover = function() {
							nameValue = document.getElementById("quantity").value;
							if (nameValue > 0) {
								if (formActive == 1) {
									buyFormButton[0].style.backgroundColor = "#8288a1";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.boxShadow = "0 1px 3px 0px rgba(0, 0, 0, 0.5)";
									formActive = 0;
								}
								buyFormButton[0].onmouseover = function() {
									buyFormButton[0].style.backgroundColor = "#B4B7C6";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.cursor = "pointer";
									buyFormButton[0].style.boxShadow = "0 2px 5px 0px rgba(0, 0, 0, 0.5)";
								}
								buyFormButton[0].onmouseout = function() {
									buyFormButton[0].style.backgroundColor = "#8288a1";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.cursor = "pointer";
									buyFormButton[0].style.boxShadow = "0 1px 3px 0px rgba(0, 0, 0, 0.5)";
								}
							} else {
								formActive = 1;
								buyFormButton[0].style.backgroundColor = "gray";
								buyFormButton[0].style.cursor = "not-allowed";
								buyFormButton[0].style.color = "black";
								buyFormButton[0].style.boxShadow = "none";
							}
						}
						dispCol1 = document.getElementById("dispCol1");
						if (data[clickedItemID].desc.length > 300) {
							dispCol1.style.overflowY = "scroll";
						}
						disableScrolling();
           			 });
       				 }  
			
		}
		showMore[0].onclick = function() {
			pageLocation += 1;
			highestView();
			if (pageLocation*ITEMS_PER_PAGE >= itemCount) {
				hideShowMore();
			}
		}
		console.log("highestView() called");
	}
	
	function lowestView() {
		clearView();
		if (getItemCount() > ITEMS_PER_PAGE) {
			displayShowMore();
		}
		var sorted = sortLowest();
		var i = 0;
		console.log(data[sorted[i]].src);
		while(i+1 <= sorted.length && i+1 <= pageLocation*ITEMS_PER_PAGE) {
			var description = data[sorted[i]].desc;
				if (description.length > 30) {
					var tempo = description.substring(20,description.length);
					var spaceLoc = 20 + tempo.search(" ");
					description = description.substring(0, spaceLoc) + "... <font id=\'longDescButton\' color=\'blue\'>[more]</font>";
				}
			writeHere[0].innerHTML += "<div class=\'items\' id=\'" + data[i].keyID + "\'>"
			 		 + "<img src=\'" + data[sorted[i]].src+ "\'/>"
					 + "<div class=\'item-name\'><hr><b><font size=\'5\'>" + data[sorted[i]].name + "</font></b><br>"
						+ description + "</div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + data[sorted[i]].price + "</div></div>"
					 + "</div>";
			i++;
			for(var p = 0; p < myDivs.length; p++) {
          				myDivs[p].addEventListener('click', function (event) {
          				clickedItemID = data[sorted[this.id]].keyID;
						item_display_overlay.style.display = "block";
						clickedExport = data[clickedItemID].keyID;
						displayPopUp(clickedItemID);
						nameValue = document.getElementById("quantity").value;
						var buyFormButton = document.getElementsByClassName("item-price");
						var formDiv = document.getElementById("buy_form");
						formDiv.onclick = function() {
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
						item_display_overlay.onmouseover = function() {
							nameValue = document.getElementById("quantity").value;
							if (nameValue > 0) {
								if (formActive == 1) {
									buyFormButton[0].style.backgroundColor = "#8288a1";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.boxShadow = "0 1px 3px 0px rgba(0, 0, 0, 0.5)";
									formActive = 0;
								}
								buyFormButton[0].onmouseover = function() {
									buyFormButton[0].style.backgroundColor = "#B4B7C6";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.cursor = "pointer";
									buyFormButton[0].style.boxShadow = "0 2px 5px 0px rgba(0, 0, 0, 0.5)";
								}
								buyFormButton[0].onmouseout = function() {
									buyFormButton[0].style.backgroundColor = "#8288a1";
									buyFormButton[0].style.color = "white";
									buyFormButton[0].style.cursor = "pointer";
									buyFormButton[0].style.boxShadow = "0 1px 3px 0px rgba(0, 0, 0, 0.5)";
								}
							} else {
								formActive = 1;
								buyFormButton[0].style.backgroundColor = "gray";
								buyFormButton[0].style.cursor = "not-allowed";
								buyFormButton[0].style.color = "black";
								buyFormButton[0].style.boxShadow = "none";
							}
						}
						dispCol1 = document.getElementById("dispCol1");
						if (data[clickedItemID].desc.length > 300) {
							dispCol1.style.overflowY = "scroll";
						}
						disableScrolling();
           			 });
       				 } 
		}
		showMore[0].onclick = function() {
			pageLocation += 1;
			lowestView();
			if (pageLocation*ITEMS_PER_PAGE >= itemCount) {
				hideShowMore();
			}
		}
		console.log("lowestView() called");
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
	
	function getItem() {
		var itemID = document.getElementsByClassName("items");
		

	}
	
	function disableScrolling(){
    	var x=window.scrollX;
   	 	var y=window.scrollY;
   		window.onscroll=function(){window.scrollTo(x, y);};
   		console.log("scrolling disabled");
	}

	function enableScrolling(){
    	window.onscroll=function(){};
    	console.log("scrolling enabled");
	}
	
	function main() {
		
		var e = document.getElementById("lowest");
		var r = document.getElementById("highest");
	
		defaultView();
		
		reset[0].onclick = function() {
			resetView();
			r.style.backgroundColor = "";
			e.style.backgroundColor = "";
		}		
		
		item_x_display.onclick = function() {
			item_display_overlay.style.display = "none";
			enableScrolling();
		}
		
		item_display_overlay.onclick = function() {
	
		}
		
		e.style.zIndex = "1";
		e.style.height = "30px";
		r.style.zIndex = "1";
		r.style.height = "30px";
		e.onclick = function() {
			resetStatus = 1;
			pageLocation = 1;
			writeHere[0].innerHTML = "";
			lowestView();
		}
		r.onclick = function() {
			resetStatus = 1;
			pageLocation = 1;
			writeHere[0].innerHTML = "";
			highestView();
		}
	}
	main();
	
};
