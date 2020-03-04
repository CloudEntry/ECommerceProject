var products = [
	{	id: 1,
		url: "https://www.wish.com/feed/tag_5899202d6fa88c49f7c6bb5d/product/545a474f5f313f3b9516b07c?&source=tag_5899202d6fa88c49f7c6bb5d&position=7&share=web",
		name: "2-Port USB Charger 12V",
		rrp: 9.95,
		price: 3.95,
		sold_out: false,
		img: "usb-chargers.png",
		desc: "<ul><li>Charge two mobile devices at once</li><li>Universal USB port works with most USB cables</li><li>Short Charging time</li><li>Separate charger and cable for versatile use</li><li>Compatible with iPhone 6, iPhone 5, iPad mini, iPad, iPod touch, iPod nano, and many Digital cameras.</li></ul>",
		rating: 3.5,
		reviews: [
			{
				name: "Ty",
				rating: 5,
				text: "Looks perfect. Will try it soon."
			},
			{
				name: "Kelsey",
				rating: 4,
				text: "Amazing product thank you so much! So convenient and I love that it has 2 USB ports!! And it’s a really pretty pink color! 😍"
			},
			{
				name: "Marern",
				rating: 5,
				text: "Looks good haven't tried it yet will update and post picture later"
			}
		]
	},
	{	id: 2,
		url: "https://www.wish.com/feed/tag_5899202d6fa88c49f7c6bb5d/product/5bea96897c83bb6d7ad58d59?&source=tag_5899202d6fa88c49f7c6bb5d&position=106&share=web",
		name: "Wireless Bluetooth FM Transmitter",
		rrp: 19.95,
		price: 9.95,
		sold_out: false,
		img: "bt-transmitter.jpeg",
		desc: "<ul><li>Precise structural design, piano paint appearance</li><li>USB2.1A charger, Bluetooth version 4.1</li><li>Charge your device whilst listening to music</li><li>Noise cancellation function, built-in noise cancellation circuit, make the call sound clearer</li><li>LED Screen</li></ul>",
		rating: 4,
		reviews: [
			{
				name: "Connie",
				rating: 5,
				text: "Love it. Arrived early."
			},
			{
				name: "Summer-Jade",
				rating: 5,
				text: "Works amazing! It connects immediately. Sound is great. 1000% would recommend"
			},
			{
				name: "Conrad",
				rating: 3,
				text: "Looks different than the photo but clear w good reception. There is loss of volume"
			},
			{
				name: "Makenzie",
				rating: 3,
				text: "Doesn’t play music loud through my stereo system even if I turn volume all the way up, but good quality and easy to use. Works good so not disappointed."
			}
		]
	},
	{	id: 3,
		url: "https://www.wish.com/feed/tag_5899202d6fa88c49f7c6bb5d/product/5d09ae0c2120c251eb66fa47?&source=tag_5899202d6fa88c49f7c6bb5d&position=157&share=web",
		name: "KW850 Automotive Diagnostic Code Reader",
		rrp: 199.95,
		price: 79.95,
		sold_out: false,
		img: "diagnostic-tool.jpeg",
		desc: "<ul><li>Universal diagnostic scan tool for multiple vehicles, supports all 10 OBDII test modes on all OBDII compliant vehicles for a complete diagnosis</li></li><li>High Quality and High-Resolution TFT colorful display help you easily to find out the troubles of your car.</li><li>KW850 Supports to 8 different languages user interface, including  English, Spanish, Portuguese, French, Russian, German, Dutch, Italian</li></ul>",
		rating: 4.5,
		reviews: [
			{
				name: "Michael",
				rating: 5,
				text: "I find it exactly what i wanted an more than enough right for the job it is intended for thk you"
			},
			{
				name: "Darren",
				rating: 5,
				text: "Great looking product can't wait to use it"
			},
			{
				name: "Russell",
				rating: 3,
				text: "excelant, great for the money"
			}
		]
	}
];

document.getElementById("product-page").style.height = `${products.length*110}vh`;

var sec = document.getElementById("product-page");
for (var i = 0; i < products.length; i++) {
	sec.insertAdjacentHTML('beforeend', `<div class="p-div" id="item-${i}"></div>`);
	var div = document.getElementById(`item-${i}`);
	div.insertAdjacentHTML('beforeend', `<img src="imgs/${products[i].img}" class="p-img"><br>`);
	// dots under img carouselle for how many imgs
	div.insertAdjacentHTML('beforeend', `${products[i].name}<br>`);
	div.insertAdjacentHTML('beforeend', `<strike>\u00A3</i>${products[i].rrp}</strike> \u00A3</i>${products[i].price}<br>`);

	div.insertAdjacentHTML('beforeend', `<div id="rating-${i}"></div>`);
	var r_div = document.getElementById(`rating-${i}`);
	r_div.insertAdjacentHTML('beforeend', `<a href="javascript:show_reviews(${i})">${get_stars(products[i].rating)} ${products[i].reviews.length} reviews</a><br><br>`);

	div.insertAdjacentHTML('beforeend', `<div id="reviews-${i}" class="reviews"><br></div>`);
	var revs = document.getElementById(`reviews-${i}`);
	for (var j = 0; j < products[i].reviews.length; j++) {
		revs.insertAdjacentHTML('beforeend', `<b>${products[i].reviews[j].name}</b> <span style="font-size:12px;letter-spacing:20px;">${get_stars(products[i].reviews[j].rating)}</span><br>${products[i].reviews[j].text}<br><br>`);
	}

	var rev_displays = [];
	for (var k = 0; k < products.length; k++)
		rev_displays[k] = false;
	var measured = false;
	var ht = 0.0;
	function show_reviews(x) {
		if (!measured) {
			var str = window.getComputedStyle(document.getElementById("product-page")).getPropertyValue('height');
			ht = parseFloat(str.substring(0,str.length-2));
			measured = true;
		}
		var short_ht = ht;
		var long_ht = ht * 1.1;
		if (rev_displays[x]) {
			document.getElementById(`reviews-${x}`).style.display = "none"
			rev_displays[x] = false;
			document.getElementById("product-page").style.height = `${short_ht}px`;
		} else {
			document.getElementById(`reviews-${x}`).style.display = "block"
			rev_displays[x] = true;
			document.getElementById("product-page").style.height = `${long_ht}px`;
		}
	}

	if (products[i].sold_out)
		div.insertAdjacentHTML('beforeend', `SOLD OUT<br>`);
	div.insertAdjacentHTML('beforeend', `<br><b>Description</b>`);
	div.insertAdjacentHTML('beforeend', `${products[i].desc}<br>`);

	div.insertAdjacentHTML('beforeend', `<div class="p-button-container" id="b-div-${i}"></div>`);
	var b_div = document.getElementById(`b-div-${i}`);
	b_div.insertAdjacentHTML('beforeend', `<button>ADD TO BASKET</button>`);
}

function get_stars(rating) {
	var r_quot = Math.floor(rating);
	var r_rem = Math.round(((rating % 1)*100))/100;
	var star_string = "";

	for (var j = 0; j < r_quot; j++)
		star_string += `<i class="fas fa-star"></i>`;
	if (r_rem > 0.49) {
		star_string += `<i class="fas fa-star-half-alt"></i>`;
		r_quot += 1;
	}
	for (var j = 0; j < (5-r_quot); j++)
		star_string += `<i class="far fa-star"></i>`;

	return star_string;
}













