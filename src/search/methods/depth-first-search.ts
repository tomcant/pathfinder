import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import { VecStr } from "../../utils/Vec2d";

const search = function* (params: SearchParams): Generator<SearchState> {
  yield* dfs({ pos: params.start }, new Set(), params);
};

const dfs = function* (node: SearchNode, visited: Set<VecStr>, params: SearchParams): Generator<SearchState> {
  const hash = node.pos.toString();

  if (visited.has(hash)) {
    return;
  }

  yield { current: node, visited: visited.add(hash), found: params.target.equals(node.pos) };

  for (const neighbour of getAdjacentPathPositions(params.maze, node.pos)) {
    yield* dfs({ pos: neighbour, prev: node }, visited, params);
  }
};

const depthFirstSearch = { name: "Depth-first search", search, rewind, isWeighted: false };

export default depthFirstSearch;
