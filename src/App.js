import React, { useEffect, useState } from "react";

import "./App.css";
import WeatherInfo from "./components/weatherinfo";

const App = () => {
  const API_KEY = "efda0b273e421da7af1bc8de4a1094ff";

  const [input, setInput] = useState("");
  const [querry, setQuerry] = useState("Nashik");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    getWeather();
  }, [querry]);

  const getWeather = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${querry}&appid=${API_KEY}`
    );

    const data = await response.json();
    setWeather(data);
    console.log(data);
  };

  const updateInput = (e) => {
    setInput(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setQuerry(input);
    setInput("");
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 303
            ? "App warm"
            : "App"
          : "App"
      }
    >
      <main>
        <div className="search-box">
          <form onSubmit={submitForm}>
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={input}
              onChange={updateInput}
            ></input>
          </form>
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date"></div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp - 273)}&deg;C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
