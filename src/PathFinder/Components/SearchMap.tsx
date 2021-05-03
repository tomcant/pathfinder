import { Cell } from "../SearchMap";
import { SearchParams } from "../path-finder";
import Vec2d from "../utils/vec2d";

const toCssClass = (cell: Cell): string => {
  switch (cell) {
    case Cell.Visited:
      return "visited";
    case Cell.Wall:
      return "wall";
    case Cell.Solution:
      return "solution";
  }
  return "";
};

type SearchMapProps = {
  searchParams: SearchParams;
  onMouseUp: (pos: Vec2d) => void;
  onMouseDown: (pos: Vec2d) => void;
  onMouseEnter: (pos: Vec2d) => void;
};

const SearchMapElem = (props: SearchMapProps): JSX.Element => {
  return (
    <div className="Grid">
      <div className="Grid-cells">
        {props.searchParams.map.getRows().map((row, rowIdx) =>
          row.map((cell, cellIdx) => (
            <div
              key={`${rowIdx}-${cellIdx}`}
              className={toCssClass(cell)}
              onMouseUp={() => props.onMouseUp(new Vec2d(cellIdx, rowIdx))}
              onMouseDown={() => props.onMouseDown(new Vec2d(cellIdx, rowIdx))}
              onMouseEnter={() => props.onMouseEnter(new Vec2d(cellIdx, rowIdx))}
            >
              {rowIdx === props.searchParams.start.y && cellIdx === props.searchParams.start.x && "🔵"}
              {rowIdx === props.searchParams.target.y && cellIdx === props.searchParams.target.x && "⭐"}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchMapElem;
