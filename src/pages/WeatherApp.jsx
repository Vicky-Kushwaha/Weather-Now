import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import { fetchCityCoordinates, fetchWeather } from "../services/weatherService";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setError("");
    setWeather(null);
    setLoading(true);

    try {
      const { latitude, longitude, name, country } = await fetchCityCoordinates(
        city
      );

      const currentWeather = await fetchWeather(latitude, longitude);

      setWeather({ ...currentWeather, city: name, country });
    } catch (err) {
      if (err.message.includes("City not found")) {
        setError("City not found. Please try again.");
      } else if (err.name === "TypeError") {
        setError("Network issue. Please check your internet connection.");
      } else {
        setError("Failed to fetch weather. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-400 p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">🌍 Weather App</h1>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

      {loading && <LoadingSpinner />}
      {error && !loading && <ErrorMessage message={error} />}
      {weather && !loading && <WeatherCard weather={weather} />}
    </div>
  );
}
