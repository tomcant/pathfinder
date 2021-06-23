import React from "react";
import ReactDOM from "react-dom";
import PathFinder from "./Components/PathFinder";
import "./index.css";

const buildPathFinderProps = () => {
  // @ts-ignore
  const bodyPadding = parseInt(getComputedStyle(document.body).getPropertyValue("padding-left"));
  // @ts-ignore
  const headerHeight = parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height"));
  const squareWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--square-width"));

  const cols = Math.floor((window.innerWidth - 2 * bodyPadding) / squareWidth);
  const rows = Math.floor((window.innerHeight - 2 * headerHeight - bodyPadding) / squareWidth);

  return {
    mazeSize: { cols, rows },
    mazeStyle: {
      gridTemplateColumns: `repeat(${cols}, ${squareWidth}px)`,
      gridTemplateRows: `repeat(${rows}, ${squareWidth}px)`,
    },
  };
};

ReactDOM.render(
  <React.StrictMode>
    <PathFinder {...buildPathFinderProps()} />
  </React.StrictMode>,
  document.getElementById("root")
);
