import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component.js";
import { Card } from "react-bootstrap";
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
          <form
            className="row justify-content-center"
            onSubmit={(e) => {
              handleSearch(e);
            }}
          >
            <input
              required
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              search
            </button>
          </form>
        </div>
      ) : loading ? (
        <div>
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow text-dark" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : !loading && error ? (
        <div>
          <Card
            className="bg-gradient"
            style={{
              width: "40%",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Card.Body className="justify-content-center">
              <center>There has been an error!</center>
              <hr />
              <center>
                <button
                  onClick={() => setError(false)}
                  className="btn btn-danger"
                >
                  Reset
                </button>
              </center>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </div>
  );
}

export default WeatherEngine;
