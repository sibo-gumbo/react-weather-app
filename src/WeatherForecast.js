import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "dc13349b33f710cte63cf40fe59aa2o5";
  let longitude = 18.4231;
  let latitude = 33.9221;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="column">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="rain-night" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">19°</span>
            <span className="WeatherForecast-temperature-min">10°</span>
            <span className="WeatherForecast-time"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
