import React from "react";
import { Card } from "react-bootstrap";
import Location from "./Location";
import Condition from "./Condition";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = (props) => {
  return (
    <Card className="mh-10" style={{ width: "15%" }}>
      <Card.Body>
        <Location />
        <hr />
        <WeatherIcon />
        <hr />
        <Condition />
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
