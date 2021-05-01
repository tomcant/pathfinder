import { useState } from "react";

type GridProps = {
  cells: Array<any>;
  onCellClick: (e: any, idx: number) => void;
};

const Grid = (props: GridProps) => {
  return (
    <div className="Grid">
      <div className="Grid-cells">
        {props.cells.map((cell, idx) => (
          <div
            key={idx}
            className={`Grid-cell${cell === 1 ? " wall" : ""}`}
            onClick={(e) => props.onCellClick(e, idx)}
          />
        ))}
      </div>
    </div>
  );
};

const GRID_WIDTH = 30;
const GRID_HEIGHT = 20;

const PathFinder = () => {
  const [cells, setCells] = useState(Array(GRID_WIDTH * GRID_HEIGHT).fill(0));

  const handleCellClick = (e: any, idx: number): void => {
    const newCells = [...cells];
    newCells[idx] = 1 - newCells[idx];
    setCells(newCells);
  };

  return (
    <div className="PathFinder">
      <Grid cells={cells} onCellClick={handleCellClick} />
    </div>
  );
};

export default PathFinder;
