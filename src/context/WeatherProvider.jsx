import { createContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [result, setResult] = useState({});

  const [charging, setCharging] = useState(false);

  const [noResult, setNoResult] = useState(false);

  const dataSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const queryWeather = async (info) => {
    setCharging(true);
    setNoResult(false);
    try {
      const { country, city } = info;

      const appId = import.meta.env.VITE_API_KEY;

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;

      const { data } = await axios(url);
      const { lat, lon } = data[0];

      const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: weather } = await axios(urlWeather);
      setResult(weather);
      setCharging(false);
    } catch (error) {
      setNoResult("No hay resultados");
    } finally {
      setCharging(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ search, dataSearch, queryWeather, result, charging, noResult }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
