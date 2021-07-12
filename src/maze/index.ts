import Maze from "./Maze";
import Vec2d from "../utils/Vec2d";

const DIRECTIONS = [
  { dx: 1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: -1 },
];

const getAdjacentPositions = (maze: Maze, pos: Vec2d, dist: number = 1): Vec2d[] => {
  const positions = [];

  for (const { dx, dy } of DIRECTIONS) {
    const adjPos = pos.add(new Vec2d(dx * dist, dy * dist));

    if (maze.isWithinBounds(adjPos)) {
      positions.push(adjPos);
    }
  }

  return positions;
};

export const getAdjacentWallPositions = (maze: Maze, pos: Vec2d, dist: number = 1): Vec2d[] =>
  getAdjacentPositions(maze, pos, dist).filter((pos) => maze.isWall(pos));

export const getAdjacentPathPositions = (maze: Maze, pos: Vec2d, dist: number = 1): Vec2d[] =>
  getAdjacentPositions(maze, pos, dist).filter((pos) => !maze.isWall(pos));

export const findEmptySquareInBounds = (maze: Maze, from: Vec2d, to: Vec2d): Vec2d => {
  let square;

  do square = Vec2d.random(from, to);
  while (maze.isWall(square));

  return square;
};
