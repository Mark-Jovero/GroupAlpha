window.onscroll = function(e) {
	var header = document.getElementsByClassName("header");
	var image = header[0].getElementsByTagName("IMG");
	if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
		console.log(header);
		image[0].style.transition += ", width 0.2s linear";
		image[0].style.width = "30px";
	} else {
		image[0].style.width = "0px";
	}
}