import { Wind, Sun } from "lucide-react";
import { weatherIcons } from "../utils/weatherIcons";

export default function WeatherCard({ weather }) {
  return (
    <div className="w-full max-w-md bg-white/80 shadow-xl rounded-2xl p-6 text-center">
      {weatherIcons[weather.weathercode] || (
        <Sun className="text-yellow-400 w-16 h-16 mx-auto" />
      )}
      <h2 className="text-2xl font-semibold mt-4">
        {weather.city}, {weather.country}
      </h2>
      <p className="text-4xl font-bold mt-2">{weather.temperature}°C</p>
      <p className="text-gray-700 mt-2 flex items-center justify-center">
        <Wind className="w-5 h-5 mr-1" />
        {weather.windspeed} km/h wind
      </p>
    </div>
  );
}
