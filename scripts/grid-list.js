const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards");

// Fetch data from JSON file and parse it
fetch("json/data.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const businesses = jsonObject["businesses"];
		businesses.forEach(displayBusiness);
	});

function displayBusiness(business) {
	// Creates the card for the business
	let card = document.createElement("section");
	let h2 = document.createElement("h2");
	let image = document.createElement("img");
	let address = document.createElement("p");
	let phone = document.createElement("p");
	let website = document.createElement("a");

	// Appends JSON Bussiness name
	h2.innerHTML = `${business.name}`;
	card.appendChild(h2);

	// Appends JSON image
	image.setAttribute("src", business.image);
	image.setAttribute("alt", `Logo for ${business.name}`);
	card.appendChild(image);

	// Gets image and apply styles
	let imageStyle = document.querySelectorAll("img");
	for (let i = 0; i < imageStyle.length; i++) {
		imageStyle[i] = image.setAttribute("width", business.width);
		imageStyle[i] = image.setAttribute("height", business.height);
	}

	for (let i = 2; i < imageStyle.length; i++) {
		imageStyle[i].setAttribute("loading", "lazy");
	}


	// Adds JSON address, phone, and website
	address.innerHTML = `${business.address}`;
	phone.innerHTML = `${business.phone}`;
	website.innerHTML = `Visit Website`;
	website.setAttribute("href", business.website);

	// Appending content to the business card
	card.appendChild(address);
	card.appendChild(phone);
	card.appendChild(website);

	// Appends all content back to cards
	display.appendChild(card);
}

// Displays grid view
gridButton.addEventListener("click", () => {
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

// Displays list view
listButton.addEventListener("click", () => {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
});
