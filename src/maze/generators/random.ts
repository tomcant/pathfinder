import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";

const WALL_PROBABILITY = 1 / 4;

const generate = function* (cols: number, rows: number): Generator<Maze> {
  let maze = Maze.empty(cols, rows);

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (Math.random() < WALL_PROBABILITY) {
        yield (maze = maze.toggleWall(new Vec2d(col, row)));
      }
    }
  }
};

const random = { name: "Random", generate };

export default random;
