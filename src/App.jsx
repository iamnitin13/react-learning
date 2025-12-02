import { useState } from "react";
import "./App.css";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  const [city, setCity] = useState();

  return (
    <div className="App">
      <h2>Weather App</h2>
      <WeatherSearch onSearch={setCity} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
