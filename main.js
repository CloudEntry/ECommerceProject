var hidden = true;

function ham_menu(scrolling) {
	hidden ? show_menu() : hide_menu();
}

document.getElementById("content").onscroll = function() { hide_menu(); }

window.onload = function() { 
	setTimeout(function(){ document.getElementById("shop-name").style.visibility = "visible"; }, 200);
	setTimeout(function(){ document.getElementById("cart-link").style.visibility = "visible"; }, 200);
	setTimeout(function(){ document.getElementById("home-page-content").style.visibility = "visible"; }, 200);
	setTimeout(function(){ document.getElementById("hamburger").style.visibility = "visible"; }, 200);
	setTimeout(function(){ document.getElementById("promo-bar").style.visibility = "visible"; }, 200);
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function show_menu() {
	hidden = false;
	if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
	document.addEventListener('wheel', preventDefault, {passive: false});
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove  = preventDefault; // mobile
	document.onkeydown  = preventDefaultForScrollKeys;
	document.getElementById("shop-name").style.visibility = "hidden";
	document.getElementById("cart-link").style.visibility = "hidden";
	document.getElementById("home-page-content").style.visibility = "hidden";
	document.getElementById("promo-bar").style.visibility = "hidden";
	document.getElementById("product-page").style.visibility = "hidden";
	document.getElementById("footer").style.visibility = "hidden";
	document.getElementById("menu").style.left = "0";
	document.getElementById("home-page").style.width = "100%";
	document.getElementById("home-page").style.marginLeft = "1192px";
	document.getElementById("home-page").style.height = "200vh";
	document.getElementById("cart-link").style.display = "none";
	document.getElementById("shop-name").style.display = "none";
	document.getElementById("promo-bar").style.display = "none";
	document.getElementById("home-page-content").style.display = "none";
	document.getElementById("hbd1").style.width = "120px";
	document.getElementById("hbd1").style.height = "12px";
	document.getElementById("hbd1").style.margin = "20px 0";
	document.getElementById("hbd2").style.width = "120px";
	document.getElementById("hbd2").style.height = "12px";
	document.getElementById("hbd2").style.margin = "-29px 0";
	document.getElementById("hbd3").style.display = "none";
	document.getElementById("hbd1").style.transform = "rotate(45deg)";
	document.getElementById("hbd2").style.transform = "rotate(-45deg)";
}

function hide_menu() {
	hidden = true;
	if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false});
	window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;
	document.getElementById("menu").style.left = "-1200px";
	document.getElementById("home-page").style.marginLeft = "-8px";
	document.getElementById("home-page").style.width = "100vw";
	document.getElementById("home-page").style.height = "100vh";
	document.getElementById("cart-link").style.display = "inline-block";
	document.getElementById("shop-name").style.display = "inline-block";
	document.getElementById("promo-bar").style.display = "block";
	document.getElementById("home-page-content").style.display = "block";
	document.getElementById("hbd1").style.width = "60px";
	document.getElementById("hbd1").style.height = "6px";
	document.getElementById("hbd1").style.margin = "10px 0";
	document.getElementById("hbd2").style.width = "60px";
	document.getElementById("hbd2").style.height = "6px";
	document.getElementById("hbd2").style.margin = "10px 0";
	document.getElementById("hbd3").style.display = "block";
	document.getElementById("hbd1").style.transform = "rotate(0deg)";
	document.getElementById("hbd2").style.transform = "rotate(0deg)";
	document.getElementById("product-page").style.visibility = "visible";
	document.getElementById("footer").style.visibility = "visible";
	setTimeout(function(){ document.getElementById("shop-name").style.visibility = "visible"; }, 500);
	setTimeout(function(){ document.getElementById("cart-link").style.visibility = "visible"; }, 500);
	setTimeout(function(){ document.getElementById("home-page-content").style.visibility = "visible"; }, 500);
	setTimeout(function(){ document.getElementById("promo-bar").style.visibility = "visible"; }, 500);
}
