import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";

const generate = (cols: number, rows: number): Maze => {
  let maze = new Maze(cols, rows);

  for (let row = 2; row < rows; row += 2) {
    for (let col = 2; col < cols; col += 2) {
      const wallLeftOrUp = [new Vec2d(col - 1, row), new Vec2d(col, row - 1)];
      maze = maze.toggleWalls([wallLeftOrUp[Math.floor(Math.random() * 2)], new Vec2d(col - 1, row - 1)]);
    }
  }

  return maze;
};

const random = { name: "Binary tree", generate };

export default random;
