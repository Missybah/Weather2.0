function refreshWeather(response) {
  // Example: update city and temperature
  let cityElement = document.querySelector("#weather-app-city");
  let temperatureElement = document.querySelector(".weather-app-temperature");
  let temperature = response.data.temperature.current;
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;

  console.log(response.data.condition.description);

  cityElement.innerHTML = response.data.city;
  timeElement.innerHTML = `$date.getDay()} ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
  descriptionElement = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`;
  temperatureElement.innerHTML = `<strong>${Math.round(
    response.data.temperature.current
  )}</strong>`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}
let searchInput = document.querySelector("#search-form-input");
let city = searchInput.value.trim();

let apiKey = "5c96e661b5c38754d1f19tae0off360c";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
{
  axios.get(apiUrl).then(refreshWeather);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
