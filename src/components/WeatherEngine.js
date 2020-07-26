import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component.js";
import "bootstrap/dist/css/bootstrap.css";

function WeatherEngine({ location }) {
  const [query, setQuery] = useState("Colombo");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setloading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=853f1026ab22087ceb5b8ac9a6055abc`
      );
      const ResJSON = await apiRes.json();
      setWeather({
        temp: ResJSON.main.temp,
        condition: ResJSON.weather[0].main,
        city: ResJSON.name,
        country: ResJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setloading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  //this hook will make the code run only once the component is mounted and never again
  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div>
      {!loading && !error ? (
        <div>
          <div className="row justify-content-center">
            <WeatherCard
              temp={weather.temp}
              country={weather.country}
              city={weather.city}
              condition={weather.condition}
            />
          </div>
          <br />
          <form className="row justify-content-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={(e) => handleSearch(e)}>search</button>
          </form>
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading...</div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There has been an error!&nbsp;&nbsp;
          <button onClick={() => setError(false)} className="btn btn-danger">
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherEngine;
