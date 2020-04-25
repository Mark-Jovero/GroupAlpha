window.onmousemove = function() {
	var buyFormButton = document.getElementsByClassName("item-price");
	buyFormButton[0].onmouseover = function() {
		if (buyFormButton[0].innerText == "Add To Cart") {
			if (buyFormButton[0].style.cursor == "not-allowed") {
				buyFormButton[0].style.color = "";
			} else {
				buyFormButton[0].style.color = "#323232";
				buyFormButton[0].style.backgroundColor = "#B4B7C6";
				
			}
		}
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
}