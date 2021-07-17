import React, { useRef, useState } from "react";
import { findEmptySquareInBounds } from "../maze";
import Maze from "../maze/Maze";
import mazeGenerators from "../maze/generators";
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

const getInitialMaze = (cols: number, rows: number) => Maze.empty(cols, rows);
const getInitialStart = (cols: number, rows: number) => new Vec2d(Math.floor(cols / 4) - 1, Math.floor(rows / 2));
const getInitialTarget = (cols: number, rows: number) => new Vec2d(cols - Math.floor(cols / 4), Math.floor(rows / 2));
const getInitialVisited = () => new Set<string>();
const getInitialSolution = () => new Set<string>();

const PathFinder = ({ mazeSize: { cols, rows }, mazeStyle }: PathFinderProps): JSX.Element => {
  const [maze, setMaze] = useState(getInitialMaze(cols, rows));
  const [start, setStart] = useState(getInitialStart(cols, rows));
  const [target, setTarget] = useState(getInitialTarget(cols, rows));
  const [visited, setVisited] = useState(getInitialVisited());
  const [solution, setSolution] = useState(getInitialSolution());

  const [, setFinishedAt] = useState(Date.now);
  const [moving, setMoving] = useState(MovingState.None);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const [mazeGenerator, setMazeGenerator] = useState("prims");
  const [searchMethod, setSearchMethod] = useState("breadthFirstSearch");

  const currentSearch = useRef<Generator | null>(null);
  const hasCurrentSearch = (): boolean => currentSearch.current !== null;
  const setCurrentSearch = (s: Generator | null): void => void (currentSearch.current = s);

  const running = useRef(false);
  const isRunning = (): boolean => running.current;
  const setIsRunning = (r: boolean): void => void (running.current = r);

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
    setIsRunning(true);

    if (!hasCurrentSearch()) {
      setCurrentSearch(generateSearch());
      setSolution(getInitialSolution());
    }

    let next;

    do {
      // @ts-ignore
      next = currentSearch.current.next();
      if (next.value) next.value();
      if (!isRunning()) return;
      await sleep(8);
    } while (!next.done);

    setCurrentSearch(null);
    setIsRunning(false);
    setFinishedAt(Date.now);
  };

  const generateSearch = function* (): Generator<() => void> {
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

  const handleStopClick = (): void => setIsRunning(false);

  const handleClearClick = (): void => {
    setMaze(getInitialMaze(cols, rows));
    setStart(getInitialStart(cols, rows));
    setTarget(getInitialTarget(cols, rows));
    setVisited(getInitialVisited());
    setSolution(getInitialSolution());
    setCurrentSearch(null);
    setIsGenerating(false);
    setIsRunning(false);
  };

  const handleGenerateClick = async (): Promise<void> => {
    handleClearClick();
    setIsGenerating(true);

    const outOfBounds = new Vec2d(cols, rows);
    setStart(outOfBounds);
    setTarget(outOfBounds);

    let finalMaze = maze;

    for (const maze of mazeGenerators[mazeGenerator].generate(cols, rows)) {
      setMaze(maze);
      finalMaze = maze;
      await sleep(5);
    }

    setStart(findEmptySquareInBounds(finalMaze, Vec2d.origin(), new Vec2d(cols / 3, rows)));
    setTarget(findEmptySquareInBounds(finalMaze, new Vec2d((cols * 2) / 3, 0), new Vec2d(cols, rows)));
    setIsGenerating(false);
  };

  const handleMazeGeneratorSelect = (e: any): void => setMazeGenerator(e.target.value);
  const handleSearchMethodSelect = (e: any): void => setSearchMethod(e.target.value);

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
    <div className={`PathFinder${isRunning() ? " is-running" : ""}${isGenerating ? " is-generating" : ""}`}>
      <Controls
        isRunning={isRunning()}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
        onClearClick={handleClearClick}
        onGenerateClick={handleGenerateClick}
        selectedMazeGenerator={mazeGenerator}
        selectedSearchMethod={searchMethod}
        onMazeGeneratorSelect={handleMazeGeneratorSelect}
        onSearchMethodSelect={handleSearchMethodSelect}
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
