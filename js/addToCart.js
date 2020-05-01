var totalCartItems = 0;
var totalCartPrice = 0;
var cartData = [];
var nameValue = parseInt(nameValue);
var cartStatus = 0;
var itemArray=[];
window.onmousemove = function() {
	var itemAdded = document.getElementsByClassName("itemAdded");
	var buyFormButton = document.getElementsByClassName("item-price");
	var cartItemCounter = document.getElementsByClassName("item_count");
	var addToCart = document.getElementsByClassName("cart_table");
	var subtotal = document.getElementsByClassName("subtotal");
	var item_display_overlay = document.getElementById("popupCover");
	var item_display = document.getElementById("itemInfoPopUp");
	
	if (nameValue > 0 && cartStatus == 0) {
		addToCart[0].innerHTML = "<thead><tr><th></th><th id=\'thead-name\'>Item</th><th>Price</th><th></th><th>Q</th><tr></thead>";
		cartStatus++;
	}
	
	buyFormButton[0].onmouseout = function() {
		if (buyFormButton[0].innerText == "Add To Cart") {
			if (buyFormButton[0].style.cursor == "not-allowed") {
				buyFormButton[0].style.color = "";
			} else {
				buyFormButton[0].style.color = "white";
				buyFormButton[0].style.backgroundColor = "#8288a1";
				
			}
		}
	}
	
	buyFormButton[0].onclick = function() {
		nameValue = parseInt(nameValue);
		if (buyFormButton[0].style.cursor != "not-allowed" && nameValue > 0) {
		
				addToCart[0].innerHTML += "<tr><td class=\'cart_image\'><img src=\'" + storeData[clickedExport].src + "\' class=\'cart_img\'></td><td class=\'item_name\'>"
					 + storeData[clickedExport].name + "</td>" + 
					 "<td>$" + storeData[clickedExport].price + " </td><td> x </td><td>" + " " + nameValue + "</td>"+ "</tr>";
			
			totalCartPrice += storeData[clickedExport].price * nameValue;
			totalCartItems += nameValue;
			cartData.push(clickedExport);
			var trimmedInt = totalCartPrice.toFixed(2);
			subtotal[0].innerHTML = "Subtotal: $<b>" + trimmedInt + "</b>";
			cartItemCounter[0].innerHTML =  totalCartItems;
			itemAdded[0].style.zIndex = "900000";
			item_display.style.display = "none";
			setTimeout(function(){
				itemAdded[0].style.zIndex = "-10";	
				item_display.style.display = "";
			}, 1000);			
			
			itemArray.push([clickedExport,nameValue]);
		}
		console.log(itemArray);
		localStorage.setItem("cartData",JSON.stringify(itemArray));
		localStorage.setItem("cartTotal", trimmedInt);
		
	}
	
}