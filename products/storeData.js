///
//PLEASE READ THE README SECTION @ GITHUB IF YOU NEED TO ACCESS THE CLICKED ITEM DATA.
//

function displayPopUp(itemID) {
	var catString = "";
	var temp;
	if (!Array.isArray(storeData[clickedExport].type)) {
		temp = storeData[clickedExport].type.substr(0,1).toUpperCase() + storeData[clickedExport].type.substr(1, storeData[clickedExport].type.length).toLowerCase();
		catString = temp + ".";
		console.log(storeData[clickedExport].type.length);
	} else {
		for (var i = 0; i < storeData[clickedExport].type.length; i++) {
			temp = storeData[clickedExport].type[i].substr(0,1).toUpperCase() + storeData[clickedExport].type[i].substr(1, storeData[clickedExport].type[i].length).toLowerCase();
			if (i != storeData[clickedExport].type.length-1) {
				if (storeData[clickedExport].type.length == 2) {
					catString += temp + ", "
				} else {
					catString += temp + ", "
				}
			} else {
				catString += temp + ".";
			}
		}
	}
	item_display_content.innerHTML = "<div id=\'dispCol1\'><img src=\'" + storeData[clickedExport].src
		+"\'><hr>"+ 	"<font size=\'2\'>Category: " + catString + "</font>"
		+ "<br><b> <h1>" + storeData[clickedExport].name
		+ "</b></h1>" + storeData[clickedExport].desc
		+ "<br><b> Price: $" + storeData[clickedExport].price   
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
	"keyID"		:	0
	},
	{
	"name" 		: 	"Whiteboard (11x8)",
	"type" 		: 	["office", "school"],
	"desc"		:	"A whiteboard. 11 by 8 inches.",
	"price" 	: 	10.99,
	"src"		:	"items/11_8_board.png",
	"keyID"		:	1
	},
	{
	"name" 		: 	"Whiteboard (48x36)",
	"type" 		: 	["office", "school"],
	"desc"		:	"A big whiteboard. 48 by 36 inches.",
	"price" 	: 	24.99,
	"src"		:	"items/48_board.png",
	"keyID"		:	2
	},
	{
	"name" 		: 	"Markers (8PC)",
	"type" 		: 	["writing", "art", "school"],
	"desc"		:	"A pencil you can write with!",
	"price" 	: 	8.99,
	"src"		:	"items/markers.png",
	"keyID"		:	3
	},
	{
	"name" 		: 	"Chalk White (2PC)",
	"type" 		: 	["art", "school"],
	"desc"		:	"White chalk for wrtiting on blackboards or on the sidewalk. Item is dust-less.",
	"price" 	: 	0.99,
	"src"		:	"items/chalk.png",
	"keyID"		:	4
	},
	{
	"name" 		: 	"Assorted Chalk (8PC)",
	"type" 		: 	["art", "school"],
	"desc"		:	"Colorful set of chalk!",
	"price" 	: 	4.99,
	"src"		:	"items/assorted_chalk.png",
	"keyID"		:	5
	},
	{
	"name" 		: 	"Ball Point Pen (10PC)",
	"type" 		: 	"writing",
	"desc"		:	"Long-lasting ball pen with comfortable grip.",
	"price" 	: 	8.99,
	"src"		:	"items/ball_pen_10.png",
	"keyID"		:	6
	},
	{
	"name" 		: 	"Ball Pen (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"All black ball point pen.",
	"price" 	: 	2.99,
	"src"		:	"items/ball_pen.png",
	"keyID"		:	7
	},
	{
	"name" 		: 	"College-Ruled Notebook",
	"type" 		: 	["paper", "writing", "school"],
	"desc"		:	"A single college-ruled notebook. 70 pages.",
	"price" 	: 	0.49,
	"src"		:	"items/collegenotebook.png",
	"keyID"		:	8
	},
	{
	"name" 		: 	"Cra-Z-Art Crayons",
	"type" 		: 	"art",
	"desc"		:	"96 Piece set with many different shades of colors!",
	"price" 	: 	6.99,
	"src"		:	"items/crayons_96.png",
	"keyID"		:	9
	},
	{
	"name" 		: 	"Dry Erase Markers (24)",
	"type" 		: 	["writing", "school", "office"],
	"desc"		:	"Cheap markers! You can loose them and not worry because they are cheap!",
	"price" 	: 	3.99,
	"src"		:	"items/dry_erase_24.png",
	"keyID"		:	10
	},
	{
	"name" 		: 	"Gel Pen (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"A premium, long-lasting black gel pen.",
	"price" 	: 	3.99,
	"src"		:	"items/gel_pen.png",
	"keyID"		:	11
	},
	{
	"name" 		: 	"Premium Mechanical Pencil (2PC)",
	"type" 		: 	"writing",
	"desc"		:	"A long-lasting lead 0.7 pencil. Comes with replacement erasers and lead refills.",
	"price" 	: 	4.29,
	"src"		:	"items/mech_pencil_2.png",
	"keyID"		:	12
	},
	{
	"name" 		: 	"Mechanical Pencils (10PC)",
	"type" 		: 	"writing",
	"desc"		:	"Low quality, cheap pencils.",
	"price" 	: 	3.99,
	"src"		:	"items/mech_pencil_10.png",
	"keyID"		:	13
	},
	{
	"name" 		: 	"Premium Pencil (6PC)",
	"type" 		: 	"writing",
	"desc"		:	"A set of pencils. Suitable for children. Pre-sharpened!",
	"price" 	: 	3.99,
	"src"		:	"items/premium_pencil_6.png",
	"keyID"		:	14
	},
	{
	"name" 		: 	"Assorted Sharpie (12PC)",
	"type" 		: 	["art", "writing"],
	"desc"		:	"Colorful set of classical sharpies!",
	"price" 	: 	12.99,
	"src"		:	"items/sharpie_assorted.png",
	"keyID"		:	15
	},
	{
	"name" 		: 	"Wide-Ruled Notebook",
	"type" 		: 	["paper", "school"],
	"desc"		:	"Wide-ruled notebook. 70 pages.",
	"price" 	: 	0.49,
	"src"		:	"items/widenotebook.png",
	"keyID"		:	16
	},
	{
	"name" 		: 	"Desk",
	"type" 		: 	["office", "furniture"],
	"desc"		:	"A wooden desk for students!",
	"price" 	: 	89.99,
	"src"		:	"items/desk.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	17
	},
	{
	"name" 		: 	"Highlighter (8PC)",
	"type" 		: 	["office", "school"],
	"desc"		:	"A neon highlighter",
	"price" 	: 	12.94,
	"src"		:	"items/Stabilo-Boss-Original-Highlighter.png",
	"page"		:	"productPage/pencil.html",
	"keyID"		:	18
	},
	{
	"name" 		: 	"Genovo X4",
	"type" 		: 	["Computers"],
	"desc"		:	"A versatile laptop! Great for gaming and school."+
						"<br><b>Specs:</b><ul>"+
						"<li>Intel Core i5</li>" +
						"<li>512GB SSD / 1TB HDD</li>" +
						"<li>15GB MEM</li>" +
						"<li>Windows Office 365 Installed!</li>" +
						"<li>2-year Warranty</li>" +
						"<li>Free Carrying Case</li>" +
						"</ul>",
	"price" 	: 	799.99,
	"src"		:	"items/laptop_13_in_cheap.png",
	"keyID"		:	19
	},
	{
	"name" 		: 	"3 Inch Binder",
	"type" 		: 	["school", "office"],
	"desc"		:	"A 3-inch binder, 3-ring. Strong hinges. Can hold up 200 pages of paper.",
	"price" 	: 	3.99,
	"src"		:	"items/binder.png",
	"keyID"		:	20
	},
	{
	"name" 		: 	"Apple iPad Mini 2",
	"type" 		: 	"tablets",
	"desc"		:	"Apple iPad Mini 2. Gray. 256GB",
	"price" 	: 	189.99,
	"src"		:	"items/ipadmini2.png",
	"keyID"		:	21
	},
	{
	"name" 		: 	"Samsung Galaxy Tab A 10 Inch",
	"type" 		: 	"tablets",
	"desc"		:	"A 10 inch tablet from Samsung! 128GB",
	"price" 	: 	149.99,
	"src"		:	"items/samsungtabA10.png",
	"keyID"		:	22
	}
]

/*

format:
,
	{
	"name" 		: 	"",
	"type" 		: 	"",
	"desc"		:	"",
	"price" 	: 	0,
	"src"		:	"items/",
	"keyID"		:	0
	}


*/
