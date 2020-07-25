import React from "react";
import { Card } from "react-bootstrap";
import Location from "./Location";
import Condition from "./Condition";
import WeatherIcon from "./WeatherIcon";

const WeatherCard = ({ temp, condition, country, city }) => {
  let highColor = 0;
  // let lowColor = 0;
  let bg = null;

  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    // lowColor = highColor - 150;
    bg = "rgb(255," + highColor + "," + highColor + ")";
  } else if (temp <= 12) {
    highColor = (1 - (temp + 20) / 32) * 255;
    // lowColor = highColor - 150;
    bg = "rgb(0," + highColor + "," + highColor + ")";
  }

  return (
    <Card
      className="bg-gradient"
      style={{
        width: "40%",
        backgroundColor: bg,
      }}
    >
      <Card.Body>
        <Location country={country} city={city} />
        <hr />
        <WeatherIcon condition={condition} />
        <hr />
        <Condition temp={temp} condition={condition} />
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
