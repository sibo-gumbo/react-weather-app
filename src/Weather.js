import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Cape Town</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Clear with periodic clouds</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <div className="d-flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Clear with periodic clouds"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">16</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}