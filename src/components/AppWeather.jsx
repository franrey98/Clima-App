import React from "react";
import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Loading from "./Loading";
import Results from "./Results";

const AppWeather = () => {
  const { result, charging, noResult } = useWeather();
  console.log(charging);
  return (
    <div className="flex gap-4">
      <Form />
      {charging ? (
        <Loading />
      ) : result?.name ? (
        <Results />
      ) : noResult ? (
        <p>{noResult}</p>
      ) : (
        <p>El clima se va a mostrar aqui</p>
      )}
    </div>
  );
};

export default AppWeather;
