const searchBar = document.getElementById("searchBar");
const temperatureDisplay = document.getElementById("temperature");
const cityDisplay = document.getElementById("cityNameDisplay");
const windSpeedDisplay = document.getElementById("windSpeed");
const humidityDisplay = document.getElementById("humidity");
const conditionImage = document.getElementById("conditionImage");
const errorMessage = document.getElementById("errorMessage");
const apiKey = "8b71d657f81139ae07ddbd53935159ca";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

let humidity;
let windSpeed;
let condition;
let temperature;
let cityName;
let errorMessageUp = false;

checkWeather("atlanta");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        document.querySelector(".error").style.display = "none";
    }
    temperatureDisplay.textContent = Math.round((data.main.temp - 273.15) * 9/5 + 32) + "° F";
    humidityDisplay.textContent = data.main.humidity + "%";
    windSpeedDisplay.textContent = Math.round(data.wind.speed * 1.609) + "mph";
    cityDisplay.textContent = data.name;

    switch(data.weather[0].main) {
        case "Thunderstorm":
            conditionImage.src = "thunderstorm.png";
            break;
        case "Rain":
            conditionImage.src = "rainy.png";
            break;
        case "Mist":
            conditionImage.src = "rainy.png";
            break;
        case "Clouds":
            conditionImage.src = "cloudy.png";
            break;
        case "Snow":
            conditionImage.src = "snowy.png";
            break;
        case "Clear":
            conditionImage.src = "sunny.png";
            break;
    }0
}
function search() {
    checkWeather(searchBar.value);
}