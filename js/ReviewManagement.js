
var database = require('mysql');

var con = database.createConnection({
	host: "localhost",
	user: "NewLeaf",
	password: "student",
	database: "NewLeaf"
});

con.connect(function(err) {
	if (err) {
		throw err;
	} else {
		console.log("Connected!");
		con.query("CREATE DATABASE");
	}
});

function createReview(userID) {
	let user = userID; // Retrieve user from MYSQL db.
	let itemSelected = ClickedExport;
	
	
}

function getReviews(item) {
	item = ClickedExport;
	
}
