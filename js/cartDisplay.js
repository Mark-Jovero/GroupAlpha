document.onmousemove = function() {
var exportHover = hoveredExport;
var itemDesc = document.getElementsByClassName("item-name");
var itemPrice = document.getElementsByClassName("item-price-container");
var isHover = 0;
	
	for(var p = 0; p < itemDesc.length; p++) {
          itemDesc[p].addEventListener('mouseover', function() {
          		console.log(hoveredExport);
          		this.style.backgroundColor = "rgba(0,0,0,0.7)";
				this.style.color = "white";
				this.style.top = "-134px";
				this.style.height = "212px";
				});
		 itemDesc[p].addEventListener('mouseout', function() {
          		this.style.display = "";
				this.style.color = "";
				this.style.backgroundColor = "";
				this.style.top = "";
				this.style.height = "";
				});
    }
	//console.log(itemDesc);


}

function itemDescHover() {
		this.style.backgroundColor = "rgba(0,0,0,0.5)";
		this.style.color = "white";
		this.style.top = "-134px";
		this.style.height = "212px";
}
/*
itemDesc[i].onmouseout = function() {
		itemDesc[i].style.display = "";
		itemDesc[i].style.color = "";
		itemDesc[i].style.backgroundColor = "";
		itemDesc[i].style.top = "";
		itemDesc[i].style.height = "";
		itemPrice[i].style.top = "";
	}
	
	
	itemDesc[i].addEventListener('mouseover' , function() {
		itemDesc[i].onmouseover = function() {
		itemDesc[i].style.backgroundColor = "rgba(0,0,0,0.5)";
		itemPrice[i].style.bottom = "0";
		itemDesc[i].style.color = "white";
		itemDesc[i].style.top = "-134px";
		itemDesc[i].style.height = "212px";
		itemPrice[i].style.top = "-166px";
	}
*/