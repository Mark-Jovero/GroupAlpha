<?php
echo "<!DOCTYPE html>
<html lang='html'>
<head>
	<title>Home Page</title>
	<link href='../css/outline.cs' rel='stylesheet' type='text/css'>
	<link href='../css/cart.css' rel='stylesheet' type='text/css'>
	<link href='../css/pageCSS/index.css' rel='stylesheet' type='text/css'>

</head>
<body>
<div class='container_grid'>
		
		<div class='top-right'>
			<div class='login'><a target='_parent' href='forms/login.html'><?php include 'php/loggedHandler.php' ?></a></div>
			<div class='help'><a target='_parent' href='faq.html'>Help</a></div>
			<div class='cart'><div class='item_count'></div>
					<img class='icon_hover' src='images/cart_hover.png' alt='Cart' width='27px'>
					<img class='icon_nohover' src='images/cart_NOhover.png' alt='nCart' width='27px' align='middle'>
					<div class='cart_content'>
						<br><span><b>Your Cart</b></span><br>
						<hr>
						<div class='cart_items'><table class='cart_table'></table></div>
						<br>
						<div class='subtotal'></div>
						<form>
							<button type='submit' formaction='../cart.html'> Checkout </button>
						</form>
					</div>
					
			</div>
		</div>
</body>
</html>";
?>
