import React from "react";
import { Card } from "react-bootstrap";
import Location from "./Location";
import Condition from "./Condition";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = (props) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;

  if (props.temp > 12) {
    highColor = (1 - (props.temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = "rgb(255," + highColor + "," + highColor + ")";
  } else if (props.temp <= 12) {
    highColor = (1 - (props.temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = "rgb(0," + highColor + "," + highColor + ")";
  }

  return (
    <Card
      className="mh-10 bg-gradient"
      style={{
        width: "15%",
        backgroundColor: bg,
      }}
    >
      <Card.Body>
        <Location />
        <hr />
        <WeatherIcon />
        <hr />
        <Condition temp={props.temp} />
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
