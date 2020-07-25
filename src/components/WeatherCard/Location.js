import React from "react";

const Location = ({ city, country }) => {
  return (
    <div className="location">
      <h2 className="text-center">{city}</h2>
      <h4 className="text-center">{country}</h4>
    </div>
  );
};

export default Location;
