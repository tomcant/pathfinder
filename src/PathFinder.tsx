import React, { useMemo, useState } from "react";
import SearchMap, { Square } from "./search/SearchMap";
import methods from "./search/methods";
import Vec2d from "./search/utils/Vec2d";
import sleep from "./utils/sleep";
import Controls from "./Controls";

type PathFinderProps = {
  mapSize: {
    cols: number;
    rows: number;
  };
  mapStyles: React.CSSProperties;
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

const PathFinder = ({ mapSize: { cols, rows }, mapStyles }: PathFinderProps): JSX.Element => {
  const [map, setMap] = useState(useMemo(() => getInitialMap(cols, rows), [cols, rows]));
  const [start, setStart] = useState(useMemo(() => getInitialStart(cols, rows), [cols, rows]));
  const [target, setTarget] = useState(useMemo(() => getInitialTarget(cols, rows), [cols, rows]));
  const [visited, setVisited] = useState(getInitialVisited());
  const [solution, setSolution] = useState(getInitialSolution());

  const [method, setMethod] = useState("breadth-first-search");
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
    setMap(map.withSquare(pos, map.isEmpty(pos) ? Square.Wall : Square.Empty));
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
      setMap(map.withSquare(pos, Square.Wall));
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

  const handleMethodSelect = (e: any): void => {
    setMethod(e.target.value);
  };

  const getClassName = (pos: Vec2d): string => {
    if (!map.isEmpty(pos)) {
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

  const buildMapSquares = (): JSX.Element[] => {
    const squares = [];

    for (let y = 0; y < map.numRows; ++y) {
      for (let x = 0; x < map.numCols; ++x) {
        const pos = new Vec2d(x, y);

        squares.push(
          <div
            key={pos.toString()}
            className={getClassName(pos)}
            onMouseUp={() => handleMouseUp()}
            onMouseDown={() => handleMouseDown(pos)}
            onMouseEnter={() => handleMouseEnter(pos)}
          />
        );
      }
    }

    return squares;
  };

  return (
    <div className="PathFinder">
      <Controls onStartClick={handleStartClick} onClearClick={handleClearClick} onMethodSelect={handleMethodSelect} />
      <div className="Map" style={mapStyles}>
        {buildMapSquares()}
      </div>
    </div>
  );
};

export default PathFinder;
