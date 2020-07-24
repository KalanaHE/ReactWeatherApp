import React from "react";

const Condition = (props) => {
  return (
    <div className="condition">
      <h2 className="text-center">{props.temp}°C</h2>
      <h4 className="text-center">Rainy</h4>
    </div>
  );
};

export default Condition;
