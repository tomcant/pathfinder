import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";

const generate = (cols: number, rows: number): Maze => {
  let maze = new Maze(cols, rows);

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      if (Math.random() < 0.25) {
        maze = maze.toggleWall(new Vec2d(col, row));
      }
    }
  }

  return maze;
};

const random = { name: "Random", generate };

export default random;
