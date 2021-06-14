import React, { useRef, useState } from "react";
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
  const [, setStopTime] = useState(Date.now);

  const search = useRef<Generator|null>(null);

  const running = useRef(false);
  const isRunning = (): boolean => running.current;
  const setRunning = (r: boolean): void => {
    running.current = r;
    if (!r) setStopTime(Date.now);
  };

  const handleMouseUp = (): void => {
    setMoving(MovingState.None);
    setIsDrawing(false);
  };

  const handleMouseDown = (pos: Vec2d): void => {
    if (isRunning()) {
      return;
    }

    if (pos.equals(start)) {
      return setMoving(MovingState.Start);
    }

    if (pos.equals(target)) {
      return setMoving(MovingState.Target);
    }

    setIsDrawing(true);
    setMap(map.toggleWall(pos));
  };

  const handleMouseEnter = (pos: Vec2d): void => {
    if (moving !== MovingState.None && !map.isWall(pos)) {
      return moving === MovingState.Start ? setStart(pos) : setTarget(pos);
    }

    if (isDrawing && !pos.equals(start) && !pos.equals(target)) {
      setMap(map.toggleWall(pos));
    }
  };

  const handleStartClick = async (): Promise<void> => {
    setRunning(true);

    if (!search.current) {
      search.current = generateSearch();
      setSolution(getInitialSolution());
    }

    let next;

    do {
      next = search.current.next();
      if (next.value) next.value();
      if (!isRunning()) return;
      await sleep(5);
    } while (!next.done);

    search.current = null;
    setRunning(false);
  };

  const generateSearch = function* (): Generator<() => void> {
    // @ts-ignore
    for (const state of methods[method].start({ map, start, target })) {
      yield () => setVisited(new Set([...state.visited]));

      if (state.found) {
        const solution = getInitialSolution();
        setSolution(solution);

        // @ts-ignore
        for (const pos of methods[method].rewind(state.current)) {
          yield () => setSolution(new Set([...solution.add(pos.toString())]));
        }

        return;
      }
    }
  };

  const handleStopClick = (): void => {
    setRunning(false);
  };

  const handleClearClick = (): void => {
    setMap(getInitialMap(cols, rows));
    setStart(getInitialStart(cols, rows));
    setTarget(getInitialTarget(cols, rows));
    setVisited(getInitialVisited());
    setSolution(getInitialSolution());
    setRunning(false);
    search.current = null;
  };

  const handleGenerateClick = (): void => {
    handleClearClick();

    const start = Vec2d.random(0, 0, cols / 3, rows / 3);
    const target = Vec2d.random((cols * 2) / 3, (rows * 2) / 3, cols, rows);

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
      return "is-wall";
    }

    if (start.equals(pos)) {
      return "is-start";
    }

    if (target.equals(pos)) {
      return "is-target";
    }

    if (solution.has(pos.toString())) {
      return "is-solution";
    }

    if (visited.has(pos.toString())) {
      return "is-visited";
    }

    return "";
  };

  return (
    <div className={`PathFinder${isRunning() ? " is-running" : ""}`}>
      <Controls
        isRunning={isRunning()}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
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
