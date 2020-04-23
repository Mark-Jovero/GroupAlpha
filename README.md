# Group Alpha
AUTHORS: JESSICA ZEPEDA, MARK JOVERO, MEDHAT ELKHIESH (**?**)

A website that sells office supplies!

## JSON File is now used for Store.html
- The .json file is located in [products/json/store.json](https://github.com/Mark-Jovero/GroupAlpha/blob/master/products/json/store.json).
- There are a lot of items in it, been testing.
- Items can be added by following the format:
```
{
"name"  :   "item name",
"type"  :   "item classification", // groups items together. Used for displaying "Related Items". Also is added to store sort type.
"desc"  :   "description of the item", // Automatically displays this in the store page.
"price" :   integer/double/float, // no quotation marks
"src"   :   "items/____.png", // Source of image. Preferabbly on a white or transparent background.
"keyID" :   integer //, // follow the order. ie 0, 1, 2 ...
""      :   null // you must include this in the last line, or the file breaks :(
} <-(If you're adding multiple items, don't forget to add a comma here!)
```
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
- ** The index.html page has changed. Layout now uses a grid system. Let me know how you like it.
- Link to view the website has changed to **https://mark-jovero.github.io/GroupAlpha/**
- Navbar and footer are in the frames folder. Both are implemented using <iframe> tag. In order to change a link, go to the frames folder and edit links there. This makes it easier to manage the website (ie, not having to go to each webpage to edit links).

## TODO [due n/a]
  - ~~finish websites/links~~
  - ~~Product art~~
  - *work on .css files
  - Replace product art with something more "modern"
  - Replace iFrames with javascript, once prof. Bierman allows use of js
  - *Add product page for each product* (and remove some (or all) of the boxes)
  - Work on logo
  - Create social media accounts?
  
 ## CONCEPTS/IDEAS
  - Your (Jessica) idea about a video as a background (?) for the home page. Looks like it matches well with our theme.
  - Colorize our overall theme. Gray seems too bland.
  
