const apiKey = "b2fb4720631284530c5c006c771177bd";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=41.7151&lon=44.8271&units=metric&appid=" +
  "b2fb4720631284530c5c006c771177bd";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;
    const visibility = data.visibility;
    const humidity = data.main.humidity;
    const feelsLike = data.main.feels_like;
    const windSpeed = data.wind.speed;

    const weatherIcon = document.getElementById("weather-icon");
    weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">`;

    const cityNameElement = document.getElementById("city-name");
    cityNameElement.textContent = ` ${data.name}, GE`;

    const dateElement = document.getElementById("date");
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateElement.textContent = date.toLocaleDateString("en-US", options);

    const temperatureElement = document.getElementById("temperature");
    const temperatureValue = Math.round(temperature);
    const temperatureUnit = "°C";
    temperatureElement.innerHTML = `<span style="font-size: 144px;">${temperatureValue}</span><sup style="font-size: 28px; position: relative; top: -60px;">${temperatureUnit}</sup>`;

    const weatherDescriptionElement = document.getElementById(
      "weather-description"
    );
    weatherDescriptionElement.textContent = weatherDescription;

    const visibilityElement = document.getElementById("visibility");
    const visibilityValue = (visibility / 1000).toFixed(1);
    visibilityElement.textContent = `Visibility ${visibilityValue} km`;
    visibilityElement.classList.add("visibility");
    visibilityElement.style.position = "relative";
    visibilityElement.style.display = "inline-block";

    const visibilityAfter = document.createElement("div");
    visibilityAfter.style.position = "absolute";
    visibilityAfter.style.right = "-27px";
    visibilityAfter.style.top = 0;
    visibilityAfter.style.border = "1px solid #FFFFFF";
    visibilityAfter.style.height = "19px";
    visibilityElement.appendChild(visibilityAfter);

    const humidityElement = document.getElementById("humidity");
    humidityElement.textContent = `Humidity ${humidity}%`;
    humidityElement.classList.add("humidity");
    humidityElement.style.position = "relative";
    humidityElement.style.display = "inline-block";

    const humidityAfter = document.createElement("div");
    humidityAfter.style.position = "absolute";
    humidityAfter.style.right = "-48px";
    humidityAfter.style.top = 0;
    humidityAfter.style.border = "1px solid #FFFFFF";
    humidityAfter.style.height = "19px";
    humidityElement.appendChild(humidityAfter);

    const feelsLikeElement = document.getElementById("feels-like");
    feelsLikeElement.textContent = `Feels like ${feelsLike} °C`;
    feelsLikeElement.classList.add("feels-like");

    const windElement = document.getElementById("wind");
    windElement.textContent = `Wind ${windSpeed} m/s`;
    windElement.classList.add("wind");
  })
  .catch((error) => {
    console.error(error);
  });
