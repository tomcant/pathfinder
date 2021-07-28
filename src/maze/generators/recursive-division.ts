import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";
import { randomEven } from "../../utils/random";

let maze: Maze;

const generate = function* (cols: number, rows: number): Generator<Maze> {
  maze = Maze.empty(cols, rows);

  for (let col = 0; col < cols; ++col) {
    yield (maze = maze.toggleWalls([new Vec2d(col, 0), new Vec2d(cols - col - 1, rows - 1)]));
  }

  for (let row = 1; row < rows - 1; ++row) {
    yield (maze = maze.toggleWalls([new Vec2d(0, row), new Vec2d(cols - 1, rows - row - 1)]));
  }

  yield* divide(new Vec2d(1, 1), new Vec2d(cols - 2, rows - 2));
};

const divide = function* (from: Vec2d, to: Vec2d): Generator<Maze> {
  const width = to.x - from.x + 1;
  const height = to.y - from.y + 1;

  if (width < 3 || height < 3) {
    return;
  }

  const vertical = width > height;
  const xy = 1 + (vertical ? from.x + randomEven(width - 2) : from.y + randomEven(height - 2));
  const gap = vertical ? new Vec2d(xy, from.y + randomEven(height)) : new Vec2d(from.x + randomEven(width), xy);
  const wallFrom = vertical ? new Vec2d(xy, from.y) : new Vec2d(from.x, xy);
  const wallTo = vertical ? new Vec2d(xy, to.y + 1) : new Vec2d(to.x + 1, xy);
  const direction = vertical ? new Vec2d(0, 1) : new Vec2d(1, 0);

  let pos = wallFrom;
  while (!pos.equals(wallTo)) {
    if (!pos.equals(gap)) {
      yield (maze = maze.toggleWall(pos));
    }
    pos = pos.add(direction);
  }

  if (vertical) {
    yield* divide(from, new Vec2d(wallTo.x - 1, to.y));
    yield* divide(new Vec2d(wallTo.x + 1, from.y), to);
  } else {
    yield* divide(from, new Vec2d(to.x, wallTo.y - 1));
    yield* divide(new Vec2d(from.x, wallTo.y + 1), to);
  }
};

const recursiveDivision = { name: "Recursive division", generate };

export default recursiveDivision;
