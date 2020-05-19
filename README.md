# Group Alpha
AUTHORS: JESSICA ZEPEDA, MARK JOVERO, MEDHAT ELKHIESH

Public Website URL: **https://mark-jovero.github.io/GroupAlpha/**

The contents on GitHub may be outdated. Please download the .ova file and import it into your VirtualBox. It is already set up to handle account registration and login. [(Download Link)](https://tinyurl.com/CSC317Alpha)

A website that sells office supplies!

## TODO [due MAY 19]
  - Input validation for password/password confirm, email, etc.

## How to Access a Clicked Item's Data
  - You can access the item that a user has clicked. To do so, it is important that your html head has the following:
  ```
  <head>
<script src="[PATH]/storeData.js"></script> // stores data from the store
<script src="[PATH]/js/store.js"></script> // returns clicked item ID
<script src="your .js file"></script>
  </head>
  ```
  - The store.js file returns several variables, but the important one is the **clickedExport** variable. **clickedExport** returns the keyID of the item that was clicked. This is a global variable, so as long as you follow the <head> format above, your .js will have access to it.
  - Once you have **clickedExport**, you can get the item information using **storeData[clickedExport]**
  - You can access the item's information by running these lines:
  ```
  var itemName = storeData[clickedExport].name;
  var itemDescription = storeData[clickedExport].desc;
  var itemPrice = storeData[clickedExport].price;
  var itemImage = storeData[clickedExport].src;
  var itemCategory = storeData[clickedExport].type; // Type of product (paper, writing, art, etc.)
  ```
  - Then, you can put it in mousemove event listener:
  ```
 window.onmousemove = function() {
      for(var p = 0; p < myDivs.length; p++) {
          myDivs[p].addEventListener('click', function (event) {
            buyFormButton[0].onclick = function() {
          		  console.log("User wants to buy " + storeData[clickedExport].name);
            		}	
		});       				
	    }
  }
  ```
 - The above code will retrieve the name of the clicked item, when they click the "Add To Cart" button.

## Store now loads data from storeData.js
- The .json file is located in [products/storeData.js](https://github.com/Mark-Jovero/GroupAlpha/blob/master/products/storeData.js).
- There are a lot of items in it, been testing.
- Items can be added by following the format:
```
{
"name"  :   "item name",
"type"  :   "item classification", // groups items together.
//Used for displaying "Related Items". 
//Can be an array of multiple types. IE ["office", "chair", "school"],
"desc"  :   "description of the item", // Automatically displays this in the store page.
"price" :   integer/double/float, // no quotation marks
"src"   :   "items/____.png", // Source of image. Preferabbly on a white or transparent background.
"keyID" :   integer, // follow the order. ie 0, 1, 2 ...
} <-(If you're adding multiple items, don't forget to add a comma here!)
```
##### DONT FORGET TO REMOVE THE COMMENTED PARTS (//). JSON HATES THAT :(
- Items are sorted in the store.js file. If a user chooses to sort by price, the js program will do the sorting.
- The type is used for displaying similar items--this is done in relatedItems.js. Type is also used to sort the store. Adding a new type will automatically add the type to the store type sort.
- Please let me know if there are any issues viewing it, or if there are viewing glitches! Thanks.

## How to Use GENERIC.html
- The GENERIC.html is in the root directory. The webpage is a template so it matches the whole website theme.
- To create a webpage using the GENERIC.html template, create a copy of it and rename it to what ever webpage you want.
- All contents should be written in the commented section within the html file: "<!-- CONTENTS GO HERE -->". It's the div whose class name is "content"
- You can modify the css file by creating your own .css or by modifying the "pages.css" file located in the css/ folder.
- Please don't forget to change the <title> tag!

## NOTES
- Link to view the website: **https://mark-jovero.github.io/GroupAlpha/**
- Navbar and footer are in the frames folder. Both are implemented using <iframe> tag. In order to change a link, go to the frames folder and edit links there. This makes it easier to manage the website (ie, not having to go to each webpage to edit links).
  
  
