var hidden = true;

function ham_menu(scrolling) {
	hidden ? show_menu() : hide_menu();
}

window.onscroll = function() { hide_menu(); }



function show_menu() {
	document.getElementById("menu").style.left = "0";
	document.getElementById("home-page").style.width = "100%";
	document.getElementById("home-page").style.marginLeft = "500px";
	document.getElementById("home-page").style.height = "160vh";
	document.getElementById("cart-link").style.marginRight = "10%";
	hidden = false;
}

function hide_menu() {
	document.getElementById("menu").style.left = "-500px";
	document.getElementById("home-page").style.marginLeft = "-8px";
	document.getElementById("home-page").style.width = "100vw";
	document.getElementById("home-page").style.height = "100vh";
	document.getElementById("cart-link").style.marginRight = "5%";
	hidden = true;
}