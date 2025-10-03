import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
    <footer>
      <p>Created by StephieOj and open-sourced on <a href="https://github.com/stephieoj/stephieoj-react-weather-app">GitHub</a></p>
    </footer>
  </StrictMode>
);
