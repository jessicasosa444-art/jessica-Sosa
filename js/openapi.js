const results = document.querySelector("#weather-results");

const currentButton = document.querySelector("#current-weather");
const forecastButton = document.querySelector("#forecast-weather");

currentButton.addEventListener("click", function () {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.74&longitude=-74.03&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results.innerHTML = `
    <h2>🌤️ Current Weather in New York, NY </h2>
    <p>🌡️ Temperature: ${data.current.temperature_2m}°F</p>
    <p>💨 Wind Speed: ${data.current.wind_speed_10m} mph</p>
    `;
    })
    .catch(function (error) {
      results.innerHTML = "<p>Sorry, weather data could not be loaded.</p>";
      console.error(error);
    });
});

forecastButton.addEventListener("click", function () {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=40.74&longitude=-74.03&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&temperature_unit=fahrenheit",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      results.innerHTML = `
    <h2>☀️ Today's Forecast for New York, NY </h2>
    <p>🔺 High: ${data.daily.temperature_2m_max[0]}°F</p>
    <p>🔻 Low: ${data.daily.temperature_2m_min[0]}°F</p>
    `;
    })
    .catch(function (error) {
      results.innerHTML = "<p>Sorry, forecast data could not be loaded.</p>";
      console.error(error);
    });
});
