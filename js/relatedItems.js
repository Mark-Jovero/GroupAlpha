window.onclick = function() {
	var clickedItem = data[clickedExport];
	var writeHere = document.getElementById("dispCol2");
	console.log(clickedItem.name + " call");
	dispCol2.innerHTML = "Items Related To " + clickedItem.name + "<br>"
		+ "";
}

function randomInt(min, max) {
	var random = Math.random().toPrecision(1)*10;
	while (random > max && random < min) {
		random = randomInt(min, max);
	}
	return random;
}