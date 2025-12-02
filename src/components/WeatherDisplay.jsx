import { useGetWeatherByCityQuery } from "../redux/weatherApi";

function WeatherDisplay({ city }) {
  const { data, error, isLoading } = useGetWeatherByCityQuery(city, {
    skip: !city || city === "",
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) {
    return <p>Please Enter City.</p>;
  }

  const current_condition = data?.current_condition[0];

  return (
    <div className="weather-info">
      <h2>Weather in: {city}</h2>
      <p>Temperature: {current_condition.temp_C}°C</p>
      <p>Feels Like: {current_condition.FeelsLikeC}°C</p>
      <p>Local Time: {current_condition.localObsDateTime}</p>
      <p>Weather Condition are: {current_condition.weatherDesc[0].value}</p>
    </div>
  );
}

export default WeatherDisplay;
