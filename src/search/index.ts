import Maze from "../maze/Maze";
import Vec2d, { VecStr } from "../utils/Vec2d";

export type SearchParams = {
  maze: Maze;
  start: Vec2d;
  target: Vec2d;
};

export type SearchNode = {
  pos: Vec2d;
  prev?: SearchNode;
};

export type SearchState = {
  current: SearchNode;
  visited: Set<VecStr>;
  found: boolean;
};

export const rewind = (node: SearchNode): Vec2d[] => {
  const path = [];

  while (node.prev) {
    path.unshift(node.pos);
    node = node.prev;
  }

  return path;
};
