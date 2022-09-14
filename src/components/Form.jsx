import useWeather from "../hooks/useWeather";
import { useState } from "react";

const Form = () => {
  const [alert, setAlert] = useState("");

  const { search, dataSearch, queryWeather } = useWeather();

  const { country, city } = search;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }
    queryWeather(search);
  };

  return (
    <div>
      {alert && <p>{alert}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">Ciudad</label>
          <input
            value={city}
            onChange={dataSearch}
            type="text"
            id="city"
            name="city"
          />
        </div>
        <div>
          <label htmlFor="country">Pais</label>
          <select
            value={country}
            onChange={dataSearch}
            name="country"
            id="country"
          >
            <option value="">Seleccione un pais</option>
            <option value="US">Estados Unidos</option>
            <option value="MX"> Mexico</option>
            <option value="AR"> Argentina</option>
            <option value="CO"> Colombia</option>
            <option value="CR"> Costa Rica</option>
            <option value="ES"> España</option>
            <option value="PE"> Peru</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Form;
