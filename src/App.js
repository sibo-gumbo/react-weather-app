import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />
        <footer>
          {" "}
          This project was coded by Sibo Gumbo and is
          <a
            href="https://github.com/sibo-gumbo/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://luxury-marzipan-ec7bdc.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
