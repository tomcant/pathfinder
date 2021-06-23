import Maze from "./Maze";
import Vec2d from "../utils/Vec2d";

export const getNeighbours = (maze: Maze, pos: Vec2d): Vec2d[] => {
  const neighbours = [];

  const dirs = [
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: -1 },
  ];

  for (const { dx, dy } of dirs) {
    const neighbour = pos.add(new Vec2d(dx, dy));

    if (maze.isWithinBounds(neighbour) && !maze.isWall(neighbour)) {
      neighbours.push(neighbour);
    }
  }

  return neighbours;
};
