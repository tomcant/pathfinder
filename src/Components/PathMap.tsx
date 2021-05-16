import React from "react";
import Vec2d from "../search/utils/Vec2d";

type PathMapProps = {
  numRows: number;
  numCols: number;
  style: React.CSSProperties;
  getSquareClassName: (pos: Vec2d) => string;
  onMouseUp: (pos: Vec2d) => void;
  onMouseDown: (pos: Vec2d) => void;
  onMouseEnter: (pos: Vec2d) => void;
};

const PathMap = (props: PathMapProps): JSX.Element => {
  const squares = [];

  for (let row = 0; row < props.numRows; ++row) {
    for (let col = 0; col < props.numCols; ++col) {
      const pos = new Vec2d(col, row);

      squares.push(
        <div
          key={pos.toString()}
          className={props.getSquareClassName(pos)}
          onMouseUp={() => props.onMouseUp(pos)}
          onMouseDown={() => props.onMouseDown(pos)}
          onMouseEnter={() => props.onMouseEnter(pos)}
        />
      );
    }
  }

  return (
    <div className="PathMap" style={props.style}>
      {squares}
    </div>
  );
};

export default PathMap;
