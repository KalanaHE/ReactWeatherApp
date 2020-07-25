import React from "react";
import { Card } from "react-bootstrap";

const WeatherIcon = (props) => {
  var icon = "";
  switch (props.condition) {
    case "rain":
      icon = "Images/WeatherSVGs/wi-day-rain.svg";
      break;
    case "thunderstorm":
      icon = "Images/WeatherSVGs/wi-day-thunderstorm.svg";
      break;
    case "tornado":
      icon = "Images/WeatherSVGs/wi-tornado.svg";
      break;
    default:
      break;
  }

  return <Card.Img src={icon} />;
};

export default WeatherIcon;
