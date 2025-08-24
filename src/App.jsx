import React, { useState } from "react";
import Weather from "./Weather";

const API_KEY = "b7ec222b7146e46f0df2627eb7658602"; // 👈 apni API key yahan daal do

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    if (!city) return alert("Please enter a city!");

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();

    if (data.cod === "404") {
      alert("City not found!");
      setWeatherData(null);
    } else {
      setWeatherData(data);
    }
  };

  return (
    <div className="app">
      <h1>🌦️ Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeather}>check</button>
      </div>

      {/* Passing data as props */}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;

