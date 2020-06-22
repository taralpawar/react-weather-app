import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      <h1>{props.city}</h1>
      <h3>{props.temp}&deg;</h3>
      <h5>{props.desc}</h5>
    </div>
  );
};

export default WeatherInfo;
