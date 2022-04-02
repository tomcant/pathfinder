import React, { useRef, useState } from "react";
import { findEmptySquareInBounds } from "../maze";
import Maze from "../maze/Maze";
import mazeGenerators from "../maze/generators";
import searchMethods from "../search/methods";
import Vec2d from "../utils/Vec2d";
import Set from "../utils/CompoundSet";
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

enum DragType {
  None,
  Start,
  Target,
  Weight,
  Drawing,
}

type Drag = {
  type: DragType;
  dragged: boolean;
  pos?: Vec2d;
};

const getInitialDrag = (): Drag => ({ type: DragType.None, dragged: false });
const getInitialMaze = (cols: number, rows: number) => Maze.empty(cols, rows);
const getInitialStart = (cols: number, rows: number) => new Vec2d(Math.floor(cols / 4) - 1, Math.floor(rows / 2));
const getInitialTarget = (cols: number, rows: number) => new Vec2d(cols - Math.floor(cols / 4), Math.floor(rows / 2));
const getInitialVisited = () => new Set<Vec2d>();
const getInitialSolution = () => new Set<Vec2d>();

const PathFinder = ({ mazeSize: { cols, rows }, mazeStyle }: PathFinderProps): JSX.Element => {
  const [maze, setMaze] = useState(getInitialMaze(cols, rows));
  const [start, setStart] = useState(getInitialStart(cols, rows));
  const [target, setTarget] = useState(getInitialTarget(cols, rows));
  const [visited, setVisited] = useState(getInitialVisited());
  const [solution, setSolution] = useState(getInitialSolution());

  const [drag, setDrag] = useState(getInitialDrag());
  const beginDrag = (type: DragType, pos: Vec2d): void => setDrag({ type, dragged: false, pos });
  const setDragPos = (pos: Vec2d): void => setDrag({ ...drag, dragged: true, pos });

  const [, setFinishedAt] = useState(Date.now);
  const [isGenerating, setIsGenerating] = useState(false);

  const [mazeGenerator, setMazeGenerator] = useState("recursiveDivision");
  const [searchMethod, setSearchMethod] = useState("breadthFirstSearch");

  const currentSearch = useRef<Generator | null>(null);
  const hasCurrentSearch = (): boolean => currentSearch.current !== null;
  const setCurrentSearch = (s: Generator | null): void => void (currentSearch.current = s);

  const _isSearching = useRef(false);
  const isSearching = (): boolean => _isSearching.current;
  const setIsSearching = (r: boolean): void => void (_isSearching.current = r);

  const handleMouseUp = (pos: Vec2d): void => {
    if (isSearching()) return;

    if (maze.isWeight(pos) && !drag.dragged) {
      setMaze(maze.setWeight(pos, (maze.getWeight(pos) as number) + 1));
    }

    setDrag(getInitialDrag());
  };

  const handleMouseDown = (pos: Vec2d): void => {
    if (isSearching()) return;

    if (pos.equals(start)) {
      return beginDrag(DragType.Start, pos);
    }

    if (pos.equals(target)) {
      return beginDrag(DragType.Target, pos);
    }

    if (maze.isWeight(pos)) {
      return beginDrag(DragType.Weight, pos);
    }

    beginDrag(DragType.Drawing, pos);
    setMaze(maze.toggleWall(pos));
  };

  const handleMouseEnter = (pos: Vec2d): void => {
    if (drag.type === DragType.None) return;

    const isStartOrTarget = pos.equals(start) || pos.equals(target);
    const isEmpty = maze.isEmpty(pos);

    switch (drag.type) {
      case DragType.Start:
      case DragType.Target:
        if (isEmpty && !isStartOrTarget) {
          drag.type === DragType.Start ? setStart(pos) : setTarget(pos);
          setDragPos(pos);
        }

        break;

      case DragType.Weight:
        if (isEmpty && !isStartOrTarget && drag.pos !== undefined) {
          setMaze(maze.setWeight(pos, maze.getWeight(drag.pos) as number).removeWeight(drag.pos));
          setDragPos(pos);
        }

        break;

      case DragType.Drawing:
        if (!isStartOrTarget && (isEmpty || maze.isWall(pos))) {
          setMaze(maze.toggleWall(pos));
          setDragPos(pos);
        }
    }
  };

  const handleDoubleClick = (pos: Vec2d): void => {
    if (!searchMethods[searchMethod].isWeighted || isSearching() || pos.equals(start) || pos.equals(target)) {
      return;
    }

    setMaze(maze.isWeight(pos) ? maze.removeWeight(pos) : maze.setWeight(pos, 5));
  };

  const handleStartClick = async (): Promise<void> => {
    setIsSearching(true);

    if (!hasCurrentSearch()) {
      setCurrentSearch(generateSearch());
      setSolution(getInitialSolution());
    }

    let next;

    do {
      // @ts-ignore
      next = currentSearch.current.next();
      if (next.value) next.value();
      if (!isSearching()) return;
      await sleep(10);
    } while (!next.done);

    setCurrentSearch(null);
    setIsSearching(false);
    setFinishedAt(Date.now);
  };

  const generateSearch = function* (): Generator<() => void> {
    const method = searchMethods[searchMethod];

    for (const state of method.search({ maze, start, target })) {
      yield () => setVisited(new Set([...state.visited]));

      if (state.found) {
        const solution = getInitialSolution();
        setSolution(solution);

        for (const pos of method.rewind(state.current)) {
          yield () => setSolution(new Set([...solution.add(pos)]));
        }

        return;
      }
    }
  };

  const handleStopClick = (): void => setIsSearching(false);

  const handleClearClick = (): void => {
    setMaze(getInitialMaze(cols, rows));
    setStart(getInitialStart(cols, rows));
    setTarget(getInitialTarget(cols, rows));
    setVisited(getInitialVisited());
    setSolution(getInitialSolution());
    setCurrentSearch(null);
    setIsGenerating(false);
    setIsSearching(false);
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
      await sleep(10);
    }

    setStart(findEmptySquareInBounds(finalMaze, Vec2d.origin(), new Vec2d(Math.floor(cols / 3), rows)));
    setTarget(findEmptySquareInBounds(finalMaze, new Vec2d(Math.floor((cols * 2) / 3), 0), new Vec2d(cols, rows)));
    setIsGenerating(false);
  };

  const handleMazeGeneratorSelect = (e: any): void => setMazeGenerator(e.target.value);

  const handleSearchMethodSelect = (e: any): void => {
    if (!searchMethods[e.target.value].isWeighted) {
      setMaze(maze.clearWeights());
    }

    setSearchMethod(e.target.value);
  };

  const getSquareClassName = (pos: Vec2d): string | undefined => {
    if (maze.isWall(pos)) return "is-wall";
    if (pos.equals(start)) return "is-start";
    if (pos.equals(target)) return "is-target";
    if (solution.has(pos)) return "is-solution";
    if (visited.has(pos)) return "is-visited";
  };

  return (
    <div
      className={`PathFinder${
        isGenerating ? " is-generating is-" + mazeGenerator : isSearching() ? " is-searching" : ""
      }`}
    >
      <Controls
        isGenerating={isGenerating}
        isSearching={isSearching()}
        isWeighted={searchMethods[searchMethod].isWeighted}
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
        maze={maze}
        style={mazeStyle}
        getSquareClassName={getSquareClassName}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onDoubleClick={handleDoubleClick}
      />
    </div>
  );
};

export default PathFinder;
