var totalCartItems = 0;
var totalCartPrice = 0;
var cartData = [];
var nameValue = parseInt(nameValue);
var cartStatus = 0;
var itemArray=[];
var firstLoad = -1;
var buyFormButton = document.getElementsByClassName("item-price");

var cartLoaded = 0; // Has the cart been loaded already?
window.onmousemove = function() {
	var quant = parseInt(nameValue);
	var addToCart = document.getElementsByClassName("cart_table");
	var cartItemCounter = document.getElementsByClassName("item_count");
	var subtotal = document.getElementsByClassName("subtotal");
	var item_display_overlay = document.getElementById("popupCover");
	var item_display = document.getElementById("itemInfoPopUp");
	var itemAdded = document.getElementsByClassName("itemAdded");
	var temp = "";
	var temp0 = "";
	var temp1 = "";
	
	// load cookies back into array
	if (getCookie('cart') != null && cartLoaded == 0) {
		var cookie = getCookie('cart');
		cartLoaded = 1;
		console.log("Cookie: " + cookie);
		for (var i = 0; i < cookie.length; i++) {
			if (cookie[i] != ",") {
				temp += cookie[i];
				
			}
			if (cookie[i] == "," || i == cookie.length-1) {
				if (temp0 == "") {
					temp0 = temp;
					temp = "";
					continue;
				}
				if (temp0 != "" && temp1 == "") {
					temp1 = temp;
					cartData.push([parseInt(temp0), parseInt(temp1)]);
					console.log(temp0 + ":" + temp1);
					temp0 = "";
					temp1 = "";
				}
				temp = "";
			}
		}
		
		// display items to cart
		addToCart[0].innerHTML = "<thead><tr><th></th><th id=\'thead-name\'>Item</th><th>Price</th><th></th><th>Q</th><tr></thead>";
		for (var i = 0; i < cartData.length; i++) {
			addToCart[0].innerHTML += "<tr><td class=\'cart_image\'><img src=\'/products/" + storeData[cartData[i][0]].src + "\' class=\'cart_img\'></td><td class=\'item_name\'>"
					 + storeData[cartData[i][0]].name + "</td>" + 
					 "<td>$" + storeData[cartData[i][0]].price + " </td><td> x </td><td>" + " " + cartData[i][1] + "</td>"+ "</tr>";
		}
		
		// display item count
		var total = 0;
		for (var i = 0; i < cartData.length; i++) {
			total += cartData[i][1];
		}
		cartItemCounter[0].innerHTML = total;
		
		// display subtotal
		var subtotal0 = 0;
		for (var i = 0; i < cartData.length; i++) {
			subtotal0 += storeData[cartData[i][0]].price * cartData[i][1];
			console.log(subtotal0);
		}
		subtotal[0].innerHTML = "Subtotal: $<b>" + subtotal0.toFixed(2) + "</b>";
	}
	

	var buyFormButton = document.getElementsByClassName("item-price");
	buyFormButton[0].onclick = function() {
		var itemIsInCart = 0;
		if (nameValue > 0) {
			
			// if item is in cart, add quantity
			for (var i = 0; i < cartData.length; i++) {
				if (clickedExport == cartData[i][0]) {
					cartData[i][1] += quant;
					itemIsInCart = 1;
					break;
				}
			}
			if (itemIsInCart == 0) {
				cartData.push([clickedExport,quant]);
			}
			
			// update cookies
			document.cookie = "cart="+cartData+"; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
			
			// update cart display using cookie data
			addToCart[0].innerHTML += "<tr><td class=\'cart_image\'><img src=\'/products/" + storeData[cartData[i][0]].src + "\' class=\'cart_img\'></td><td class=\'item_name\'>"
					 + storeData[cartData[i][0]].name + "</td>" + 
					 "<td>$" + storeData[cartData[i][0]].price + " </td><td> x </td><td>" + " " + cartData[i][1] + "</td>"+ "</tr>";
			
			// display item count
			var total = 0;
			for (var i = 0; i < cartData.length; i++) {
				total += cartData[i][1];
			}
			cartItemCounter[0].innerHTML = total;
		
			// display subtotal
			var subtotal0 = 0;
			for (var i = 0; i < cartData.length; i++) {
				subtotal0 += storeData[cartData[i][0]].price * cartData[i][1];
				console.log(subtotal0);
			}
			subtotal[0].innerHTML = "Subtotal: $<b>" + subtotal0.toFixed(2) + "</b>";
			
			// item added display
			itemAdded[0].style.zIndex = "900000";
			item_display.style.display = "none";
			setTimeout(function(){
				itemAdded[0].style.zIndex = "-10";	
				item_display.style.display = "";
				location.reload();
			}, 1000);	
				
		}
	}
}

function getCookie(name) {
	var result = "";
	var count = 0;
	if (document.cookie.indexOf(name+"=") == -1) {return null}
	for (var i = document.cookie.indexOf(name+"=")+name.length+1; i < document.cookie.length; i++) {
		if (document.cookie[i] != ";"){result += document.cookie[i];}
		else {break}
	}
	return result;
}
