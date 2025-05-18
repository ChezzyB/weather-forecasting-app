import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city");
      return;
    }

    try {
      const currentWeatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const currentWeatherData = await currentWeatherRes.json();

      if (currentWeatherData.cod === "404") {
        setError(currentWeatherData.message);
        setWeather(null);
        return;
      }

      setWeather(currentWeatherData);
      setError("");

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      const forecastData = await forecastRes.json();
      setForecast(forecastData.list.slice(0, 8));
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Failed to fetch weather data.");
    }
  };

  const kelvinToCelsius = (k) => Math.round(k - 273.15);

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div>
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>{kelvinToCelsius(weather.main.temp)}°C</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            alt={weather.weather[0].description}
            style={{ display: "block" }}
          />
        </div>
      )}

      {forecast.length > 0 && (
        <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
          {forecast.map((item, index) => {
            const date = new Date(item.dt * 1000);
            const hour = date.getHours();
            return (
              <div key={index} className="hourlyWeather">
                <p>{hour}:00</p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="Forecast"
                />
                <p>{kelvinToCelsius(item.main.temp)}°C</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
