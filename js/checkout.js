var loaded = 0;
var cart = [];
var temp = "";
var temp0 = "";
var temp1 = "";
var calculatedCartTotal;

window.onmousemove =  function() {
	if (loaded == 0) {
		loaded = 1;
		
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
					cart.push([parseInt(temp0), parseInt(temp1)]);
					console.log(temp0 + ":" + temp1);
					temp0 = "";
					temp1 = "";
				}
				temp = "";
				}
			}
		}

		var table = document.getElementById("cartTable");
		var totalItems = 0;
		var totalPrice = 0;
		for (var i = 0; i < cart.length; i++) {
			var item = cart[i][0];
			var quantity = cart[i][1];
			var row = table.insertRow(i+1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
	
			cell0.innerHTML = "<img class=\'med-image\' src=/products/" + storeData[item].src + ">"; // item image
			cell1.innerHTML = storeData[item].name; // item name
			cell2.innerHTML = quantity; // item quantity
			cell3.innerHTML = storeData[item].price; // item price
			
			totalItems += quantity;
			totalPrice += storeData[item].price * quantity;

		}
		var row = table.insertRow(table.rows.length);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		cell1.innerHTML = "<b class=\'align-left\'>Subtotal: </b>";
		cell2.innerHTML = "<b>" + totalItems + "</b>";
		cell3.innerHTML = "<b>$" + totalPrice + "</b>";
		
		var row = table.insertRow(table.rows.length);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		cell1.innerHTML = "<b class=\'align-left\'>Tax: </b>";
		cell2.innerHTML = "<b>" + "</b>";
		cell3.innerHTML = "<b>$" + (totalPrice * 0.095).toFixed(2) + "</b>";
		
		var row = table.insertRow(table.rows.length);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);
		cell1.innerHTML = "<b class=\'align-left\'>Order Total: </b>";
		cell2.innerHTML = "<b>" + "</b>";
		cell3.innerHTML = "<b>$" + (totalPrice + totalPrice * 0.095).toFixed(2) + "</b>";
		calculatedCartTotal = (totalPrice + totalPrice * 0.095).toFixed(2);
	}

	

}
