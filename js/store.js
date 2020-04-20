var dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'https://mark-jovero.github.io/GroupAlpha/products/json/store.json');
var data = 0;
var b = 0;
var count = 1;


dataRequest.onload = function e() {
	var data = JSON.parse(dataRequest.responseText);
	var writeHere = document.getElementsByClassName("content");
	var showMore = document.getElementsByClassName("shop_nav_container");
	var reset = document.getElementsByClassName("reset");
	var highest = document.getElementById("highest");
	var itemCount = data.length;
	var ITEMS_PER_PAGE = 20;
	var pageNum = 1;
	var lastPage = Math.ceil(itemCount / ITEMS_PER_PAGE);
	var pageLocation = 1;
	var displayedItems = 0;
	var getSortDropDownItems = document.getElementsByClassName("dropdown");
	var resetStatus = 0;
	
	function getItemCount() {
		return itemCount;
	}
	
	function pageLocation() {
		return pageLocation;
	}
	
	function displayedItems() {
		return displayedItems;
	}
	
	function displayShowMore() {
		showMore[0].style.display = "block";
	}
	function hideShowMore() {
		showMore[0].style.display = "none";
	}
	
	function getKey(index) {
		if (index < data.length) {
			return data[index].key;
		}
		return -1;
	}
	
	function pushToArray() {
		var list = new Array();
		var sorted = new Array();
		
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
			console.log("List is now: " + list);
			for (var j = i; j < list.length; j++) {
				var nextItem = data[list[j]].price;
				if (i != j) {
					console.log(current + " - " + nextItem);
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
			console.log("----HIGHEST IS: " + highestVal);
		}
		console.log("length: " + list.length);
		console.log(list);
		return list;
	}
	
	var i = 0;
	function defaultView() {
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
					writeHere[0].innerHTML += "<div class=\'items\'>"
			 		 + "<img src=\'" + data[i].src + "\'/>"
					 + "<div class=\'item-name\'><hr><b><font size=\'5\'>" + data[i].name + "</font></b></div>"
					 + "<div class=\'item-price-container\'><div class=\'item-price\'> $" + data[i].price + "</div></div>"
					 + "</div>";
					i++
				}
		}
		showMore[0].onclick = function() {
			pageLocation += 1;
			defaultView();
			if (i+1 > itemCount) {
				hideShowMore();
			}
		}
	}
	
	function resetView() {
		resetStatus = 1;
		writeHere[0].innerHTML = "";
		console.log("Reset called");
		defaultView();
	}
	
	function clearView() {
		resetStatus = 1;
		writeHere[0].innerHTML = "";
		console.log("Clear called");
	}
	
	function main() {
		var list = pushToArray();
		for (var i = 0; i < list.length; i++) {
			console.log(data[list[i]].price);
		}
		defaultView();
		reset[0].onclick = function() {
			resetView();
		}
		
		highest.onclick = function() {
		}
	}
	main();
	
};
dataRequest.send();
