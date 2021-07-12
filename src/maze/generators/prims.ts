import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";
import { getAdjacentWallPositions, getAdjacentPathPositions } from "../";

const generate = (cols: number, rows: number): Maze => {
  let maze = Maze.full(cols, rows);
  const frontier = [Vec2d.random(Vec2d.origin(), new Vec2d(cols, rows))];

  // eslint-disable-next-line no-loop-func
  while (frontier.some((pos) => maze.isWall(pos))) {
    // eslint-disable-next-line no-loop-func
    const cell = randomElement(frontier.filter((pos) => maze.isWall(pos)));
    maze = maze.toggleWall(cell);

    const adjPath = getAdjacentPathPositions(maze, cell, 2);
    if (adjPath.length > 0) {
      const randomPath = randomElement(adjPath);
      maze = maze.toggleWall(new Vec2d((cell.x + randomPath.x) / 2, (cell.y + randomPath.y) / 2));
    }

    frontier.push(...getAdjacentWallPositions(maze, cell, 2));
  }

  return maze;
};

const randomElement = <T>(elements: T[]): T => elements[Math.floor(Math.random() * elements.length)];

const prims = { name: "Prims", generate };

export default prims;
