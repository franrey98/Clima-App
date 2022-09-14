import React from "react";
import useWeather from "../hooks/useWeather";

const Results = () => {
  const { result } = useWeather();

  const { name, main } = result;

  // Degree Kelvin
  const kelvin = 273.15;

  console.log(main);

  return (
    <div>
      <h1>El clima de {name} es</h1>
      <p>
        La temperatura es:{parseInt(main.temp - kelvin)}
        <span>&#x2103;</span>
      </p>
      <p>
        La temperatura minima es :{parseInt(main.temp_min - kelvin)}
        <span>&#x2103;</span>
      </p>
      <p>
        La temperatura maxima es :{parseInt(main.temp_max - kelvin)}
        <span>&#x2103;</span>
      </p>
      <p>a</p>
    </div>
  );
};

export default Results;
