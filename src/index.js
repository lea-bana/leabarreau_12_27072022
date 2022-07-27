import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

/**
 * @file JSDOC OF SPORTSEE PROJECT
 * @author Barreau Léa
 */

/* Code used to render the app to the DOM. */
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

/* Rendering the app to the DOM. */
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
