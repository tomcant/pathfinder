import React from "react";
import Maze from "../maze/Maze";
import Vec2d from "../utils/Vec2d";

type MazeProps = {
  maze: Maze;
  style: React.CSSProperties;
  getSquareClassName: (pos: Vec2d) => string | undefined;
  onMouseUp: (pos: Vec2d) => void;
  onMouseDown: (pos: Vec2d) => void;
  onMouseEnter: (pos: Vec2d) => void;
  onDoubleClick: (pos: Vec2d) => void;
};

const MazeComponent = (props: MazeProps): JSX.Element => {
  const squares = [];

  for (let row = 0; row < props.maze.numRows; ++row) {
    for (let col = 0; col < props.maze.numCols; ++col) {
      const pos = new Vec2d(col, row);

      squares.push(
        <div
          key={pos.toString()}
          className={props.getSquareClassName(pos)}
          data-weight={props.maze.getWeight(pos)}
          onMouseUp={() => props.onMouseUp(pos)}
          onMouseDown={() => props.onMouseDown(pos)}
          onMouseEnter={() => props.onMouseEnter(pos)}
          onDoubleClick={() => props.onDoubleClick(pos)}
        />
      );
    }
  }

  return (
    <div className="Maze" style={props.style}>
      {squares}
    </div>
  );
};

export default MazeComponent;
