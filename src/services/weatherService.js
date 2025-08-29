export async function fetchCityCoordinates(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  const data = await res.json();
  if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }
  return data.results[0]; // { latitude, longitude, name, country }
}

export async function fetchWeather(latitude, longitude) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const data = await res.json();
  return data.current_weather;
}
