let icon = document.querySelector(".icon");
let currentTemp = document.querySelector(".temp");
let windSpeed = document.querySelector(".speed");
let windChill = document.querySelector(".chill");
let coverage = document.querySelector(".coverage");

const URL = 
  "https://api.openweathermap.org/data/2.5/weather?lat=41.6828&lon=-88.3515&appid=97ce60e6d0bc0ca722b497935512500d&units=imperial";

async function fetchURL() {
  try {
    const response = await fetch(URL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchURL();

function displayWeather(weatherData) {
  let iconImage = document.createElement("img");
  const iconSrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  let desc = weatherData.weather[0].description;
	desc = desc
		.toLowerCase()
		.split(" ")
		.map((a) => a.charAt(0).toUpperCase() + a.substring(1))
		.join(" ");

  iconImage.setAttribute("src", iconSrc);
  iconImage.setAttribute("alt", desc);
  icon.appendChild(iconImage);

  currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}&#8457;`;
  windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(0)}`;
  coverage.innerHTML = desc;

  let temp = weatherData.main.temp;
  let speed = weatherData.wind.speed;

  if (temp <= 50 && speed > 3) {
    let chill =
      35.74 +
      0.6215 * temp -
      35.75 * speed ** 0.16 +
      0.4275 * temp * speed ** 0.16;
    windChill.innerHTML = `${Math.round(chill)}&#8457;`;
    
  } else {
    chill = "N/A";
    windChill.innerHTML = `${chill}`;
  }
}