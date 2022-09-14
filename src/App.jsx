import WheaterApp from "./components/AppWeather";
import { WeatherProvider } from "./context/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <WheaterApp />
    </WeatherProvider>
  );
}

export default App;
