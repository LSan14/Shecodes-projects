function formatTime(time) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let heading = document.querySelector(`#dateT`);
  heading.innerHTML = `Last updated at ${hours}:${minutes}`;
}

formatTime();

function formatDate(date) {
  let formatDay = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[formatDay.getDay()];
  let calendarDay = formatDay.getDate();
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[formatDay.getMonth()];
  let year = formatDay.getFullYear();

  let daySelector = document.querySelector(`#selector-day`);
  daySelector.innerHTML = `${day}, ${calendarDay}/${month}/${year}`;
}
formatDate();

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector(`#searchB`).value;
  let cityNameForm = document.querySelector(`#cityN`);
  cityNameForm.innerHTML = `${city}`;

  inputCity(city);
}

let selectForm = document.querySelector(`#search-city`);
selectForm.addEventListener(`submit`, searchCity);

function inputCity(city) {
  let apiKey = `63557c3b856339c603d5ab6d7046f330`;
  let apiEndPoint = `api.openweathermap.org`;
  let celsius = `metric`;
  let apiUrl = `https://${apiEndPoint}/data/2.5/weather?q=${city}&appid=${apiKey}&units=${celsius}`;
  axios.get(apiUrl).then(displayWeather);
}

function displayWeather(response) {
  let showCurrentWeather = document.querySelector(`#current-weather`);
  showCurrentWeather.innerHTML = `${response.data.weather[0].description}`;
  let displayWind = document.querySelector(`#windspeedF`);
  displayWind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
  let displayHumidity = document.querySelector(`#humidityP`);
  displayHumidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let displayRealFeel = document.querySelector(`#realF`);
  displayRealFeel.innerHTML = `${Math.round(response.data.main.feel_like)}`;
  let celsius = document.querySelector(`#temperatureNumber`);
  let temperature = Math.round(response.data.main.temp);
  celsius.innerHTML = `${temperature}°C`;
  let heading = document.querySelector(`#cityN`);
  heading.innerHTML = response.data.name;
}

function displayFahrenheit(event, celsius) {
  event.preventDefault();
  displayWeather(celsius);
  let showFahrenheit = document.querySelector(`#fahrenheitN`);
  showFahrenheit.innerHTML = `${Math.round(celsius) * 1.8 + 32} F`;
}

let fahrenheit = document.querySelector(`#fahrenheitN`);
fahrenheit.addEventListener(`click`, displayFahrenheit);

function showGeoLocation(position) {
  let apiKey = `63557c3b856339c603d5ab6d7046f330`;
  let apiEndPoint = `api.openweathermap.org`;
  let celsius = `metric`;
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiUrl = `https://${apiEndPoint}/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${celsius}`;
  axios.get(apiUrl).then(displayWeather);
}

function displayCoordinates(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showGeoLocation);
}

let allowCoordinates = document.querySelector(`#currentB`);
allowCoordinates.addEventListener(`click`, displayCoordinates);
