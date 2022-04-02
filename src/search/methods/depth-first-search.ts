import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d from "../../utils/Vec2d";
import Set from "../../utils/CompoundSet";

const search = function* (params: SearchParams): Generator<SearchState> {
  yield* dfs({ pos: params.start }, new Set(), params);
};

const dfs = function* (node: SearchNode, visited: Set<Vec2d>, params: SearchParams): Generator<SearchState> {
  const pos = node.pos;

  if (visited.has(pos)) {
    return;
  }

  yield {
    current: node,
    visited: visited.add(pos),
    found: params.target.equals(pos),
  };

  for (const neighbour of getAdjacentPathPositions(params.maze, pos)) {
    yield* dfs({ pos: neighbour, prev: node }, visited, params);
  }
};

const depthFirstSearch = { name: "Depth-first search", search, rewind, isWeighted: false };

export default depthFirstSearch;
