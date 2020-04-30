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

}

function itemDescHover() {
		this.style.backgroundColor = "rgba(0,0,0,0.5)";
		this.style.color = "white";
		this.style.top = "-134px";
		this.style.height = "212px";
}
