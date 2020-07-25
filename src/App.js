import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component.js";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

function App() {
  const [query, setQuery] = useState("Colombo");
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=853f1026ab22087ceb5b8ac9a6055abc`
    );
    const ResJSON = await apiRes.json();
    return ResJSON;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      console.log("the temperature is " + res.main.temp);
      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        city: res.name,
        country: res.sys.country,
      });
    });
  };

  return (
    <div className="App">
      <Container fluid>
        <div className="row justify-content-center">
          <WeatherCard
            temp={weather.temp}
            country={weather.country}
            city={weather.city}
            condition={weather.condition}
          />
          &nbsp;&nbsp;
          <WeatherCard
            temp={-12}
            country={"USA"}
            city={"Washington"}
            condition={"thunderstorm"}
          />
          &nbsp;&nbsp;
          <WeatherCard
            temp={30}
            country={"United Kingdom"}
            city={"Wales"}
            condition={"tornado"}
          />
        </div>
        <br />
        <br />
        <form>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={(e) => handleSearch(e)}>search</button>
        </form>
      </Container>
    </div>
  );
}

export default App;
