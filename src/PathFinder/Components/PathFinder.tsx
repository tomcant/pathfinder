import { useState } from "react";
import SearchMap, { Cell } from "../SearchMap";
import SearchMapElem from "./SearchMap";
import { SearchParams, breadthFirstSearch } from "../path-finder";
import Vec2d from "../utils/vec2d";
import sleep from "../utils/sleep";

const getInitialSearchParams = (): SearchParams => ({
  map: new SearchMap(30, 20),
  start: new Vec2d(1, 1),
  target: new Vec2d(16, 17),
});

const PathFinder = (): JSX.Element => {
  const [searchParams, setSearchParams] = useState(getInitialSearchParams());
  const [isDrawing, setIsDrawing] = useState(false);

  const handleMouseUp = (pos: Vec2d): void => {
    setIsDrawing(false);
  };

  const handleMouseDown = (pos: Vec2d): void => {
    setIsDrawing(true);
    setCell(pos, searchParams.map.isEmpty(pos) ? Cell.Wall : Cell.Empty);
  };

  const handleMouseEnter = (pos: Vec2d): void => {
    if (isDrawing) {
      setCell(pos, Cell.Wall);
    }
  };

  const setCell = (pos: Vec2d, cell: Cell): void => {
    searchParams.map.setCell(pos, cell);
    setSearchParams({ ...searchParams });
  };

  const handleStartClick = async (): Promise<void> => {
    let targetNode;

    // @ts-ignore
    for (const searchState of breadthFirstSearch(searchParams)) {
      searchParams.map.setCell(searchState.node.pos, Cell.Visited);
      setSearchParams({ ...searchParams });

      if (searchState.foundTarget) {
        targetNode = searchState.node;
        break;
      }

      await sleep(25);
    }

    if (targetNode) {
      const path: Vec2d[] = [];

      while (targetNode.prev) {
        path.unshift(targetNode.pos);
        targetNode = targetNode.prev;
      }

      path.unshift(searchParams.start);

      for (const pos of path) {
        searchParams.map.setCell(pos, Cell.Solution);
        setSearchParams({ ...searchParams });
        await sleep(50);
      }
    }
  };

  const handleResetClick = (): void => {
    setSearchParams(getInitialSearchParams());
  };

  const handleGenerateClick = (): void => {
    const searchParams = getInitialSearchParams();
    searchParams.map.generateWalls();
    setSearchParams(searchParams);
  };

  return (
    <div className="PathFinder">
      <div className="Controls">
        <button onClick={handleStartClick}>Start</button>
        <button onClick={handleResetClick}>Reset</button>
        <button onClick={handleGenerateClick}>Generate walls</button>
      </div>
      <SearchMapElem
        searchParams={searchParams}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </div>
  );
};

export default PathFinder;
