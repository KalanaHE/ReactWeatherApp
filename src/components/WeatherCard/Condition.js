import React from "react";

const Condition = ({ temp, condition }) => {
  return (
    <div className="condition">
      <h2 className="text-center">{temp}°C</h2>
      <h4 className="text-center">{condition}</h4>
    </div>
  );
};

export default Condition;
