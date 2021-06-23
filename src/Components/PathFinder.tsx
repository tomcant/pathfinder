import React, { useRef, useState } from "react";
import Maze from "../maze/Maze";
import generateMaze from "../maze/generators/random";
import searchMethods from "../search/methods";
import Vec2d from "../utils/Vec2d";
import sleep from "./utils/sleep";
import Controls from "./Controls";
import MazeComponent from "./Maze";

type PathFinderProps = {
  mazeSize: {
    cols: number;
    rows: number;
  };
  mazeStyle: React.CSSProperties;
};

enum MovingState {
  None,
  Start,
  Target,
}

const getInitialMaze = (cols: number, rows: number) => new Maze(cols, rows);
const getInitialStart = (cols: number, rows: number) => new Vec2d(Math.floor(cols / 4) - 1, Math.floor(rows / 2) - 1);
const getInitialTarget = (cols: number, rows: number) => new Vec2d(cols - Math.floor(cols / 4), Math.floor(rows / 2) - 1);
const getInitialVisited = () => new Set<string>();
const getInitialSolution = () => new Set<string>();

const PathFinder = ({ mazeSize: { cols, rows }, mazeStyle }: PathFinderProps): JSX.Element => {
  const [maze, setMaze] = useState(getInitialMaze(cols, rows));
  const [start, setStart] = useState(getInitialStart(cols, rows));
  const [target, setTarget] = useState(getInitialTarget(cols, rows));
  const [visited, setVisited] = useState(getInitialVisited());
  const [solution, setSolution] = useState(getInitialSolution());

  const [searchMethod, setSearchMethod] = useState("breadth-first-search");
  const [moving, setMoving] = useState(MovingState.None);
  const [isDrawing, setIsDrawing] = useState(false);
  const [, setStopTime] = useState(Date.now);

  const search = useRef<Generator | null>(null);

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
    setMaze(maze.toggleWall(pos));
  };

  const handleMouseEnter = (pos: Vec2d): void => {
    if (moving !== MovingState.None && !maze.isWall(pos)) {
      return moving === MovingState.Start ? setStart(pos) : setTarget(pos);
    }

    if (isDrawing && !pos.equals(start) && !pos.equals(target)) {
      setMaze(maze.toggleWall(pos));
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
    const method = searchMethods[searchMethod];

    for (const state of method.start({ maze, start, target })) {
      yield () => setVisited(new Set([...state.visited]));

      if (state.found) {
        const solution = getInitialSolution();
        setSolution(solution);

        for (const pos of method.rewind(state.current)) {
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
    setMaze(getInitialMaze(cols, rows));
    setStart(getInitialStart(cols, rows));
    setTarget(getInitialTarget(cols, rows));
    setVisited(getInitialVisited());
    setSolution(getInitialSolution());
    setRunning(false);
    search.current = null;
  };

  const handleGenerateClick = (): void => {
    handleClearClick();

    const { maze, start, target } = generateMaze(cols, rows);

    setMaze(maze);
    setStart(start);
    setTarget(target);
  };

  const handleMethodSelect = (e: any): void => {
    setSearchMethod(e.target.value);
  };

  const getSquareClassName = (pos: Vec2d): string => {
    if (maze.isWall(pos)) {
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
        selectedSearchMethod={searchMethod}
      />
      <MazeComponent
        numRows={rows}
        numCols={cols}
        style={mazeStyle}
        getSquareClassName={getSquareClassName}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export default PathFinder;
