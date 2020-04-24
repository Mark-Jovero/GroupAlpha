///
//PLEASE READ THE README SECTION @ GITHUB IF YOU NEED TO ACCESS THE CLICKED ITEM DATA.
//

function displayPopUp(itemID) {
	item_display_content.innerHTML = "<div id=\'dispCol1\'><img src=\'" + storeData[itemID].src
		+ "\'><br><b> <h1>" + storeData[itemID].name
		+ "</b></h1>" + storeData[itemID].desc
		+ "<br><b> Price: $" + storeData[itemID].price  
		+ "</b><br><br><div id=\'buy_form\'><form>" + 
		"<label for=\'quantity\'>Quantity</label><input type=\'number\' min=\'0\' max=\'100\' value=\'0\' id=\'quantity\' name=\'quantity\' onkeypress=\'return event.keyCode != 13;\'></form></div>"//disables enter input
	+	"<div class=\'item-price\'>Add To Cart</div></div><div id=\'dispCol2\'></b><div>";
}

var storeData = [
	{
	"name" 		: 	"Pencil (1PC)",
	"type" 		: 	"writing",
	"desc"		:	"A pencil you can write with!",
	"price" 	: 	0.59,
	"src"		:	"items/pencil.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	0
	},
	{
	"name" 		: 	"Whiteboard (11x8)",
	"type" 		: 	"office",
	"desc"		:	"A whiteboard. 11 by 8 inches.",
	"price" 	: 	10.99,
	"src"		:	"items/11_8_board.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	1
	},
	{
	"name" 		: 	"Whiteboard (48x36)",
	"type" 		: 	"office",
	"desc"		:	"A big whiteboard. 48 by 36 inches.",
	"price" 	: 	24.99,
	"src"		:	"items/48_board.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	2
	},
	{
	"name" 		: 	"Markers (8PC)",
	"type" 		: 	"writing",
	"desc"		:	"A pencil you can write with!",
	"price" 	: 	8.99,
	"src"		:	"items/markers.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	3
	},
	{
	"name" 		: 	"Chalk White (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"White chalk for wrtiting on blackboards or on the sidewalk. Item is dust-less.",
	"price" 	: 	0.99,
	"src"		:	"items/chalk.png",
	"page"		:	"productPage/chalk.html",
	"keyID"		:	4
	},
	{
	"name" 		: 	"Assorted Chalk (8PC)",
	"type" 		: 	"writing",
	"desc"		:	"Colorful set of chalk!",
	"price" 	: 	4.99,
	"src"		:	"items/assorted_chalk.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	5
	},
	{
	"name" 		: 	"Ball Point Pen (10PC)",
	"type" 		: 	"writing",
	"desc"		:	"Long-lasting ball pen with comfortable grip.",
	"price" 	: 	8.99,
	"src"		:	"items/ball_pen_10.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	6
	},
	{
	"name" 		: 	"Ball Pen (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"All black ball point pen.",
	"price" 	: 	2.99,
	"src"		:	"items/ball_pen.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	7
	},
	{
	"name" 		: 	"College-Ruled Notebook",
	"type" 		: 	"paper",
	"desc"		:	"A single college-ruled notebook. 70 pages.",
	"price" 	: 	0.49,
	"src"		:	"items/collegenotebook.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	8
	},
	{
	"name" 		: 	"Cra-Z-Art Crayons",
	"type" 		: 	"art",
	"desc"		:	"96 Piece set with many different shades of colors!",
	"price" 	: 	6.99,
	"src"		:	"items/crayons_96.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	9
	},
	{
	"name" 		: 	"Dry Erase Markers (24)",
	"type" 		: 	"writing",
	"desc"		:	"Cheap markers! You can loose them and not worry because they are cheap!",
	"price" 	: 	3.99,
	"src"		:	"items/dry_erase_24.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	10
	},
	{
	"name" 		: 	"Gel Pen (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"A premium, long-lasting black gel pen.",
	"price" 	: 	3.99,
	"src"		:	"items/gel_pen.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	11
	},
	{
	"name" 		: 	"Premium Mechanical Pencil (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"A long-lasting lead 0.7 pencil. Comes with replacement erasers and lead refills.",
	"price" 	: 	4.29,
	"src"		:	"items/mech_pencil_2.png",
	"page"		:	"productPage/mech_pencil_2.html",
	"keyID"		:	12
	},
	{
	"name" 		: 	"Mechanical Pencils (10PC)",
	"type" 		: 	"writing",
	"desc"		:	"Low quality, cheap pencils.",
	"price" 	: 	3.99,
	"src"		:	"items/mech_pencil_10.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	13
	},
	{
	"name" 		: 	"Premium Pencil (6PC)",
	"type" 		: 	"writing",
	"desc"		:	"A set of pencils. Suitable for children. Pre-sharpened!",
	"price" 	: 	3.99,
	"src"		:	"items/premium_pencil_6.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	14
	},
	{
	"name" 		: 	"Assorted Sharpie (12PC)",
	"type" 		: 	"art",
	"desc"		:	"Colorful set of classical sharpies!",
	"price" 	: 	12.99,
	"src"		:	"items/sharpie_assorted.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	15
	},
	{
	"name" 		: 	"Wide-Ruled Notebook",
	"type" 		: 	"paper",
	"desc"		:	"Wide-ruled notebook. 70 pages.",
	"price" 	: 	0.49,
	"src"		:	"items/widenotebook.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	16
	},
	{
	"name" 		: 	"Desk",
	"type" 		: 	"furniture",
	"desc"		:	"A wooden desk for students!",
	"price" 	: 	89.99,
	"src"		:	"items/empty.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	17
	},
	{
	"name" 		: 	"HP Laptop DV5",
	"type" 		: 	"computer",
	"desc"		:	"3GHz quad-core laptop with a 15 inch screen, integrated graphics, 500GB HDD, and 16GB memory.",
	"price" 	: 	729.99,
	"src"		:	"items/empty.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	18
	},
	{
	"name" 		: 	"Google Chromebook",
	"type" 		: 	"computer",
	"desc"		:	"A premium laptop made by Google!",
	"price" 	: 	989.99,
	"src"		:	"items/empty.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	19
	}
	
]