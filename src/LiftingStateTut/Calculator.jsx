import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temp, convert) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (e) => {
    setTemperature(e.target.value);
    setScale("c");
  };

  const handleFahrenheitChange = (e) => {
    setTemperature(e.target.value);
    setScale("f");
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <>
      <TemperatureInput
        scale="c"
        temp={celsius}
        onTempChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temp={fahrenheit}
        onTempChange={handleFahrenheitChange}
      />
    </>
  );
}

export default Calculator;
