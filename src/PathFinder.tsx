import { useState } from "react";
import Vec2d from "./search/utils/Vec2d";
import SearchMap, { Square } from "./search/SearchMap";
import methods from "./search/methods";

const sleep = async (ms: number): Promise<void> => {
  await new Promise((r) => setTimeout(r, ms));
};

enum MovingState {
  None,
  Start,
  Target,
}

const getInitialMap = () => new SearchMap(40, 20);
const getInitialStart = () => new Vec2d(1, 1);
const getInitialTarget = () => new Vec2d(38, 18);
const getInitialVisited = () => new Set<string>();
const getInitialSolution = () => new Set<string>();

const PathFinder = (): JSX.Element => {
  const [map, setMap] = useState(getInitialMap());
  const [start, setStart] = useState(getInitialStart());
  const [target, setTarget] = useState(getInitialTarget());
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
    setMap(map.withCell(pos, map.isEmpty(pos) ? Square.Wall : Square.Empty));
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

    if (isDrawing) {
      setMap(map.withCell(pos, Square.Wall));
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
          await sleep(20);
        }

        break;
      }

      await sleep(10);
    }
  };

  const handleResetClick = (): void => {
    setMap(getInitialMap());
    setStart(getInitialStart());
    setTarget(getInitialTarget());
    setVisited(getInitialVisited());
    setSolution(getInitialVisited());
  };

  const handleGenerateMapClick = (): void => {
    handleResetClick();
    const map = getInitialMap();
    map.generateWalls();
    setMap(map);
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

    for (let y = 0; y < map.height; ++y) {
      for (let x = 0; x < map.width; ++x) {
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
      <div className="Controls">
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleGenerateMapClick}>Generate map</button>
        <select onChange={handleMethodSelect}>
          {Object.entries(methods).map(([key, method]) => (
            <option key={key} value={key}>
              {method.name}
            </option>
          ))}
        </select>
      </div>
      <div className="Map">{buildMapSquares()}</div>
    </div>
  );
};

export default PathFinder;
