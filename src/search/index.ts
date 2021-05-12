import SearchMap from "./SearchMap";
import Vec2d from "./utils/Vec2d";

export type SearchParams = {
  map: SearchMap;
  start: Vec2d;
  target: Vec2d;
};

export type SearchNode = {
  pos: Vec2d;
  prev?: SearchNode;
};

export type SearchState = {
  current: SearchNode;
  visited: Set<string>;
  found: boolean;
};

export type SearchMethod = {
  name: string;
  start: (params: SearchParams) => Generator<SearchState>;
  rewind: (node: SearchNode) => Vec2d[];
};

export const rewind = (node: SearchNode): Vec2d[] => {
  const path = [];

  while (node.prev) {
    path.unshift(node.pos);
    node = node.prev;
  }

  return path;
};
