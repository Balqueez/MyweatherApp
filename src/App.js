import React, { useState } from "react";

const API_KEY = "388a4842d50ef28cb2c164baebcf0347"; // get free API key from https://openweathermap.org/api

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", textAlign: "center" }}>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: 10, width: "80%", marginBottom: 20 }}
      />
      <br />
      <button onClick={fetchWeather} style={{ padding: "10px 20px" }}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: 20 }}>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity} %</p>
        </div>
      )}
    </div>
  );
}

export default App;
