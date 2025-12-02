import { useState } from "react";

function WeatherSearch({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />

      <button onClick={() => onSearch(city)}>Search</button>
    </div>
  );
}

export default WeatherSearch;
