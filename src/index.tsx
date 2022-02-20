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
  const rows = Math.max(5, Math.floor((window.innerHeight - 3 * headerHeight) / squareWidth));

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

if (window.location.search.indexOf('embed') !== -1) {
  var embedCss = ':root{--nc-tx-1:#000000;--nc-tx-2:#1A1A1A;--nc-bg-1:#FFFFFF;--nc-bg-2:#F6F8FA;--nc-bg-3:#E5E7EB;--nc-lk-1:#0070F3;--nc-lk-2:#0366D6;--nc-lk-tx:#FFFFFF;--nc-ac-1:#79FFE1;--nc-ac-tx:#0C4047;}header{display:none;}';
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(embedCss));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(style);
}
