let spotlight = document.querySelector(".spotlight");

// Fetch data from JSON file and parse it
fetch("json/data.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (jsonObject) {
		const businesses = jsonObject["businesses"];

    // Filter through businesses to find membership level of silver or gold
		const member = businesses.filter((business) =>
    business.membership === "silver" || business.membership === "gold");

    /* 
      Loop through the businesses with membership level of silver or gold
      and randomly display businesses that match criteria
      to spotlight section in HTML
    */
    for (let i = 0; i < 3; i++) {
      let randomSpot = Math.floor(Math.random() * member.length);
      let card = document.createElement("div");
      card.className = "random-spotlight";
      let h3 = document.createElement("h3");
      let logo = document.createElement("img");
      let phone = document.createElement("p");
      let website = document.createElement("a");

      h3.innerHTML = `${member[randomSpot].name}`;
      card.appendChild(h3);

      logo.setAttribute("src", member[randomSpot].image);
      logo.setAttribute("alt", `Logo for: ${member[randomSpot].name}`);
      card.appendChild(logo);

      // Gets image and applies styles
	    let imageStyle = document.querySelectorAll("img");
	    for (let i = 0; i < imageStyle.length; i++) {
		    imageStyle[i] = logo.setAttribute("width", member[randomSpot].width);
		    imageStyle[i] = logo.setAttribute("height", member[randomSpot].height);
	    };

      phone.innerHTML = `${member[randomSpot].phone} `;

      website.setAttribute("href", member[randomSpot].website);
      website.innerHTML = `Website`;

      card.appendChild(phone);
      card.appendChild(website);

      spotlight.appendChild(card);

      member.splice(randomSpot, 1);
    }
	});