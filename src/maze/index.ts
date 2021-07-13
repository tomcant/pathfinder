import Maze from "./Maze";
import Vec2d from "../utils/Vec2d";

const DIRECTIONS = [
  { dx: 1, dy: 0 },
  { dx: 0, dy: 1 },
  { dx: -1, dy: 0 },
  { dx: 0, dy: -1 },
];

const getAdjacentPositions = (pos: Vec2d, dist: number): Vec2d[] =>
  DIRECTIONS.map(({ dx, dy }) => pos.add(new Vec2d(dx * dist, dy * dist)));

const getAdjacentMazePositions = (maze: Maze, pos: Vec2d, dist: number): Vec2d[] =>
  getAdjacentPositions(pos, dist).filter((pos) => maze.isWithinBounds(pos));

export const getAdjacentWallPositions = (maze: Maze, pos: Vec2d, dist: number = 1): Vec2d[] =>
  getAdjacentMazePositions(maze, pos, dist).filter((pos) => maze.isWall(pos));

export const getAdjacentPathPositions = (maze: Maze, pos: Vec2d, dist: number = 1): Vec2d[] =>
  getAdjacentMazePositions(maze, pos, dist).filter((pos) => !maze.isWall(pos));

export const findEmptySquareInBounds = (maze: Maze, from: Vec2d, to: Vec2d): Vec2d => {
  let square;

  do square = Vec2d.random(from, to);
  while (maze.isWall(square));

  return square;
};
