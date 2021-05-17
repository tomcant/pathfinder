import React, { useState } from "react";
import SearchMap from "../search/SearchMap";
import methods from "../search/methods";
import Vec2d from "../search/utils/Vec2d";
import sleep from "./utils/sleep";
import Controls from "./Controls";
import PathMap from "./PathMap";

type PathFinderProps = {
  mapSize: {
    cols: number;
    rows: number;
  };
  mapStyle: React.CSSProperties;
};

enum MovingState {
  None,
  Start,
  Target,
}

const getInitialMap = (cols: number, rows: number) => new SearchMap(cols, rows);
const getInitialStart = (cols: number, rows: number) => new Vec2d(Math.floor(cols / 4) - 1, Math.floor(rows / 2) - 1);
const getInitialTarget = (cols: number, rows: number) => new Vec2d(cols - Math.floor(cols / 4), Math.floor(rows / 2) - 1);
const getInitialVisited = () => new Set<string>();
const getInitialSolution = () => new Set<string>();

const PathFinder = ({ mapSize: { cols, rows }, mapStyle }: PathFinderProps): JSX.Element => {
  const [map, setMap] = useState(getInitialMap(cols, rows));
  const [start, setStart] = useState(getInitialStart(cols, rows));
  const [target, setTarget] = useState(getInitialTarget(cols, rows));
  const [visited, setVisited] = useState(getInitialVisited());
  const [solution, setSolution] = useState(getInitialSolution());

  const [method, setMethod] = useState("greedy-best-first-search");
  const [moving, setMoving] = useState(MovingState.None);
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseUp = (): void => {
    setMoving(MovingState.None);
    setIsDrawing(false);
  };

  const handleMouseDown = (pos: Vec2d): void => {
    if (pos.equals(start)) {
      setMoving(MovingState.Start);
      return;
    }

    if (pos.equals(target)) {
      setMoving(MovingState.Target);
      return;
    }

    setIsDrawing(true);
    setMap(map.toggleWall(pos));
  };

  const handleMouseEnter = (pos: Vec2d): void => {
    if (moving === MovingState.Start) {
      setStart(pos);
      return;
    }

    if (moving === MovingState.Target) {
      setTarget(pos);
      return;
    }

    if (isDrawing && !pos.equals(start) && !pos.equals(target)) {
      setMap(map.toggleWall(pos));
    }
  };

  const handleStartClick = async (): Promise<void> => {
    const solution = getInitialSolution();
    setSolution(solution);

    // @ts-ignore
    for (const { current, found, visited } of methods[method].start({ map, start, target })) {
      setVisited(new Set([...visited]));

      if (found) {
        // @ts-ignore
        for (const pos of methods[method].rewind(current)) {
          setSolution(new Set([...solution.add(pos.toString())]));
          await sleep(15);
        }

        break;
      }

      await sleep(10);
    }
  };

  const handleClearClick = (): void => {
    setMap(getInitialMap(cols, rows));
    setStart(getInitialStart(cols, rows));
    setTarget(getInitialTarget(cols, rows));
    setVisited(getInitialVisited());
    setSolution(getInitialSolution());
  };

  const handleGenerateClick = (): void => {
    handleClearClick();

    const start = Vec2d.random(cols, rows);
    const target = Vec2d.random(cols, rows);

    setStart(start);
    setTarget(target);

    let map = getInitialMap(cols, rows);

    for (let row = 0; row < rows; ++row) {
      for (let col = 0; col < cols; ++col) {
        const pos = new Vec2d(col, row);

        if (start.equals(pos) || target.equals(pos)) {
          continue;
        }

        if (Math.random() < 0.25) {
          map = map.toggleWall(pos);
          setMap(map);
        }
      }
    }
  };

  const handleMethodSelect = (e: any): void => {
    setMethod(e.target.value);
  };

  const getSquareClassName = (pos: Vec2d): string => {
    if (map.isWall(pos)) {
      return "wall";
    }

    if (start.equals(pos)) {
      return "start";
    }

    if (target.equals(pos)) {
      return "target";
    }

    if (solution.has(pos.toString())) {
      return "solution";
    }

    if (visited.has(pos.toString())) {
      return "visited";
    }

    return "";
  };

  return (
    <div className="PathFinder">
      <Controls
        onStartClick={handleStartClick}
        onClearClick={handleClearClick}
        onGenerateClick={handleGenerateClick}
        onMethodSelect={handleMethodSelect}
        selectedMethod={method}
      />
      <PathMap
        numRows={rows}
        numCols={cols}
        style={mapStyle}
        getSquareClassName={getSquareClassName}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export default PathFinder;