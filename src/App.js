import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import WeatherEngine from "./components/WeatherEngine";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <div className="row">
        <div className="col-sm-4">
          <WeatherEngine location="colombo" />
        </div>
        <div className="col-sm-4">
          <WeatherEngine location="miami" />
        </div>
        <div className="col-sm-4">
          <WeatherEngine location="kandy" />
        </div>
      </div>
    </Container>
  );
}

export default App;
