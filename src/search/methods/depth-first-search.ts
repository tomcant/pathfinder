import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";

const search = function* (params: SearchParams): Generator<SearchState> {
  yield* dfs({ pos: params.start }, new Set(), params);
};

const dfs = function* (node: SearchNode, visited: Set<string>, params: SearchParams): Generator<SearchState> {
  const hash = node.pos.toString();

  if (visited.has(hash)) {
    return;
  }

  yield { current: node, visited: visited.add(hash), found: params.target.equals(node.pos) };

  for (const neighbour of getAdjacentPathPositions(params.maze, node.pos)) {
    yield* dfs({ pos: neighbour, prev: node }, visited, params);
  }
};

const depthFirstSearch = { name: "Depth-first search", search, rewind };

export default depthFirstSearch;
