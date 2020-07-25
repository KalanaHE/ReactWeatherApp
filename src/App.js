import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component.js";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <div class="row justify-content-center">
          <WeatherCard
            temp={15}
            country={"Sri Lanka"}
            city={"Colombo"}
            condition={"rain"}
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
      </Container>
    </div>
  );
}

export default App;
