import React from "react";
import ReactDOM from "react-dom";
import PathFinder from "./Components/PathFinder";
import "./index.css";

const isEmbedMode = () => window.location.search.indexOf("embed") !== -1;

if (isEmbedMode()) {
  const hiddenElems =
    "header,#maze-generator legend,#maze-generator select,#search-method legend,#search-method select{display:none}";
  const tweaks =
    ":root{--square-width:24px}body{padding:0 !important;background:transparent}.Controls{flex-direction:row;margin-bottom:0.5rem;gap:1rem}.Controls>fieldset{padding:0;border:none;background:none}.Maze{box-shadow:none}";

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(hiddenElems + tweaks));
  (document.head || document.getElementsByTagName("head")[0]).appendChild(style);
}

const buildPathFinderProps = () => {
  const mazeSize = getSizeFromUrl();
  const squareWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--square-width"));

  if (mazeSize.cols === null) {
    const bodyPadding = isEmbedMode() ? 0 : parseInt(getComputedStyle(document.body).getPropertyValue("padding-left"));
    // @ts-ignore
    mazeSize.cols = Math.floor((window.innerWidth - 2 * bodyPadding) / squareWidth);
  }

  if (mazeSize.rows === null) {
    const headerHeight = isEmbedMode()
      ? 30
      : // @ts-ignore
        parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height"));

    // @ts-ignore
    mazeSize.rows = Math.max(5, Math.floor((window.innerHeight - 3 * headerHeight) / squareWidth));
  }

  return {
    mazeSize,
    mazeStyle: {
      gridTemplateColumns: `repeat(${mazeSize.cols}, ${squareWidth}px)`,
      gridTemplateRows: `repeat(${mazeSize.rows}, ${squareWidth}px)`,
    },
  };
};

const getSizeFromUrl = () => {
  const size = {
    cols: null,
    rows: null,
  };

  const params = new URLSearchParams(window.location.search);

  // @ts-ignore
  if (params.has("cols")) size.cols = parseInt(params.get("cols"));
  // @ts-ignore
  if (params.has("rows")) size.rows = parseInt(params.get("rows"));

  return size;
};

ReactDOM.render(
  <React.StrictMode>
    {/*
    // @ts-ignore */}
    <PathFinder {...buildPathFinderProps()} />
  </React.StrictMode>,
  document.getElementById("root")
);
