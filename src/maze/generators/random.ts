import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";

const random = (cols: number, rows: number) => {
  const start = Vec2d.random(0, 0, cols / 3, rows / 3);
  const target = Vec2d.random((cols * 2) / 3, (rows * 2) / 3, cols, rows);

  let maze = new Maze(cols, rows);

  for (let row = 0; row < rows; ++row) {
    for (let col = 0; col < cols; ++col) {
      const pos = new Vec2d(col, row);

      if (start.equals(pos) || target.equals(pos)) {
        continue;
      }

      if (Math.random() < 0.25) {
        maze = maze.toggleWall(pos);
      }
    }
  }

  return { maze, start, target };
};

export default random;
