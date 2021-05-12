import React from "react";
import ReactDOM from "react-dom";
import PathFinder from "./PathFinder";
import "./index.css";

const calcMapDimensions = () => {
  // @ts-ignore
  const bodyPadding = window.getComputedStyle(document.querySelector("body")).getPropertyValue("padding");
  // @ts-ignore
  const headerHeight = window.getComputedStyle(document.querySelector("header")).getPropertyValue("height");

  return {
    width: Math.floor((window.innerWidth - 2 * parseInt(bodyPadding)) / 25),
    height: Math.floor((window.innerHeight - 2 * parseInt(headerHeight) - parseInt(bodyPadding)) / 25),
  };
};

const getMapStyles = () => {
  const { width, height } = calcMapDimensions();

  return { gridTemplate: `repeat(${height}, 25px) / repeat(${width}, 25px)` };
};

ReactDOM.render(
  <React.StrictMode>
    <PathFinder
      mapDimensions={calcMapDimensions()}
      mapStyles={getMapStyles()}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
