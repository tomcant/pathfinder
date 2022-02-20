import React from "react";
import ReactDOM from "react-dom";
import PathFinder from "./Components/PathFinder";
import "./index.css";

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

const buildPathFinderProps = () => {
  const mazeSize = getSizeFromUrl();
  const squareWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--square-width"));

  if (mazeSize.cols === null) {
    // @ts-ignore
    const bodyPadding = parseInt(getComputedStyle(document.body).getPropertyValue("padding-left"));
    // @ts-ignore
    mazeSize.cols = Math.floor((window.innerWidth - 2 * bodyPadding) / squareWidth);
  }

  if (mazeSize.rows === null) {
    // @ts-ignore
    const headerHeight = parseInt(getComputedStyle(document.querySelector("header")).getPropertyValue("height"));
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

ReactDOM.render(
  <React.StrictMode>
    {/*
    // @ts-ignore */}
    <PathFinder {...buildPathFinderProps()} />
  </React.StrictMode>,
  document.getElementById("root")
);

if (window.location.search.indexOf("embed") !== -1) {
  const embedCss =
    ":root{--nc-tx-1:#000000;--nc-tx-2:#1A1A1A;--nc-bg-1:#FFFFFF;--nc-bg-2:#F6F8FA;--nc-bg-3:#E5E7EB;--nc-lk-1:#0070F3;--nc-lk-2:#0366D6;--nc-lk-tx:#FFFFFF;--nc-ac-1:#79FFE1;--nc-ac-tx:#0C4047;}body{padding:0;}header{display:none;}fieldset#maze-generator{display:none;}";
  const style = document.createElement("style");
  style.appendChild(document.createTextNode(embedCss));
  (document.head || document.getElementsByTagName("head")[0]).appendChild(style);
}
