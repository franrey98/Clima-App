import React from "react";
import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Results from "./Results";

const AppWeather = () => {
  const { result } = useWeather();
  return (
    <div className="flex gap-4">
      <Form />
      {result?.name && <Results />}
    </div>
  );
};

export default AppWeather;
