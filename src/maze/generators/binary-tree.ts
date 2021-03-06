import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";
import { random } from "../../utils/random";

const generate = function* (cols: number, rows: number): Generator<Maze> {
  let maze = Maze.empty(cols, rows);

  for (let row = 2; row < rows; row += 2) {
    for (let col = 2; col < cols; col += 2) {
      const wallLeftOrUp = [new Vec2d(col - 1, row), new Vec2d(col, row - 1)];
      yield (maze = maze.toggleWalls([wallLeftOrUp[random(2)], new Vec2d(col - 1, row - 1)]));
    }
  }
};

const binaryTree = { name: "Binary tree", generate };

export default binaryTree;
