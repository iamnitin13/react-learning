const scaleUnit = {
  c: "Celsius",
  f: "Fahrenheit",
};

function TemperatureInput(props) {
  const { scale, temp, onTempChange } = props;

  return (
    <>
      <legend>{scaleUnit[scale]}:</legend>
      <input type="number" value={temp} onChange={onTempChange} />
    </>
  );
}

export default TemperatureInput;
