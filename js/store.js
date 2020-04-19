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
				while (i+1 <= getItemCount() && i+1 <= pageLocation*ITEMS_PER_PAGE) {
					writeHere[0].innerHTML += "<div class=\'items\'>"
			 		 + "<img src=\'" + data[i].src + "\'/> <br>"
					 + data[i].name + " - $"
					 + data[i].price
					 + "<br> "+ i + "</div>";
					i++
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
	}
	
	var highestItem = 0;
	var currentItem = 0;
	var temp;
	function highestView() {
		clearView();
		if (resetStatus == 1) {
			resetStatus = 0;
			i = 0;
			pageLocation = 1;
		}
		while (i+1 <= getItemCount() && i+1 <= pageLocation*ITEMS_PER_PAGE) {
			currentItem = data[i].price;
			var j = 0;
			while (j+1 <= getItemCount()) {
				highestItem = data[j].price;
				if (highestItem > currentItem) {
					currentItem = highestItem;
				}
				j++;
			}
			i++;
		}
		console.log(currentItem);
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
		defaultView();
	
		reset[0].onclick = function() {
			resetView();
		}
		
		highest.onclick = function() {
			highestView();
		}
	}
	main();
	
};
dataRequest.send();
