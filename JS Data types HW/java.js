let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Please enter city");
city = city.toLowerCase();
city = city.trim();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsiusTemperature = Math.round(temperature);
  let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);
  alert(
    "It is currently " +
      celsiusTemperature +
      "°C (" +
      fahrenheitTemperature +
      "°F) in " +
      city +
      " with a humidity of " +
      humidity +
      "%"
  );
} else {
  alert(
    "Sorry we do not have the weather for this city. Go to http://www.google.com/search?q=weather"
  );
}
