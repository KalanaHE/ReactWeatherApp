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
          <WeatherCard temp="20" />
          <WeatherCard temp="-12" />
          <WeatherCard temp="30" />
        </div>
      </Container>
    </div>
  );
}

export default App;
