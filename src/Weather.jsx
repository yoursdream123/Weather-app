
import React, { useEffect } from "react";

function Weather({ data }) {
  // useEffect example: run when data changes
  useEffect(() => {
    console.log("Weather data updated:", data);
  }, [data]);

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <p>🌡️ {data.main.temp}°C</p>
      <p>☁️ {data.weather[0].description}</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>🌬️ Wind: {data.wind.speed} m/s</p>
    </div>
  );
}

export default Weather;
