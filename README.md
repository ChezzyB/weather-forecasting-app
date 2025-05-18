# 🌦️ Weather Forecast App

WeatherNow is a simple and responsive weather application built with **React**, using the old **OpenWeatherMap 2.5 API** to fetch current weather and hourly forecasts. It includes support for **light/dark mode**, temperature **unit conversion (Celsius/Fahrenheit)**, and location-based city search.

---

## 🧠 Features

- 🔍 Search for any city’s current weather  
- 🕗 View short-term hourly forecasts  
- 🌡️ Toggle between Celsius and Fahrenheit  
- 🌘 Switch between light and dark themes  
- 📍 Default city set to Kelowna  

---

## 🏗️ Project Structure

```

src/
├── App.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── NotFound.jsx
├── components/
│   ├── Navbar.jsx
│   ├── ToggleTheme.jsx
│   └── ToggleConversion.jsx
├── context/
│   ├── ThemeContext.jsx
│   └── ConversionContext.jsx
├── routes/
│   └── AppRoutes.jsx
└── assets/
└── rainbow-svgrepo-com.svg

````

---

## 🌐 API Usage

This app uses the old **OpenWeatherMap 2.5 API** for weather data. You’ll need an API key from [https://openweathermap.org/api](https://openweathermap.org/api).

### 📌 .env configuration

Create a `.env` file in the project root:

```bash
VITE_WEATHER_API_KEY=your_openweathermap_api_key
````

---

## 📡 API Endpoints Used

### 🔹 Current Weather Data (City-based)

Fetches current weather and location data:

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
```

* **Returns**:

  * Temperature (`main.temp`)
  * Humidity (`main.humidity`)
  * Wind speed (`wind.speed`)
  * Weather description (`weather[0].description`)
  * Weather icon code (`weather[0].icon`)

---

### 🔹 5-Day / 3-Hour Forecast

Used to get the hourly forecast (next 24 hours shown via 8 segments):

```
GET https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}
```

* **Returns**:

  * Array of 3-hour forecast objects (`list`)
  * Includes temperature, description, and icons

---

## 🧩 Contexts Used

### 🎨 Theme Context (`ThemeContext.jsx`)

* Provides global light/dark mode.
* Default: `Dark`

```js
const { theme, toggleTheme } = useTheme();
```

---

### 🌡️ Conversion Context (`ConversionContext.jsx`)

* Toggles between Celsius and Fahrenheit.
* Default: `Celcius`

```js
const { theme: unit, toggleConversion } = useConversion();
```

---

## 🧪 Example Usage

```js
const kelvinToTemp = (k) => {
  return unit === "Celcius"
    ? `${Math.round(k - 273.15)}°C`
    : `${Math.round((k - 273.15) * 9/5 + 32)}°F`;
};
```

---

## 📱 UI Overview

* **Navbar** includes:

  * Rainbow logo
  * Home/About buttons
  * Toggle for Theme & Temperature

* **Home Page** includes:

  * Search input
  * Current weather card with icon, temperature, humidity, and wind speed
  * 8-segment hourly forecast (next 24 hours)

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/ChezzyB/weather-forecasting-app.git
cd weathernow
npm install
```

### 2. Add your `.env` file

```
VITE_WEATHER_API_KEY=your_api_key_here
```

### 3. Run the app

```bash
npm run dev
```


## 🌈 Credits

* Weather data by [OpenWeatherMap](https://openweathermap.org/)
* Icons from OpenWeatherMap icon API
* Rainbow logo by [SVGRepo](https://www.svgrepo.com/)

