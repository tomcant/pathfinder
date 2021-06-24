import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getNeighbours } from "../../maze";

const dfs = function* (node: SearchNode, visited: Set<string>, params: SearchParams): Generator<SearchState> {
  yield { current: node, visited, found: node.pos.equals(params.target) };

  for (const neighbour of getNeighbours(params.maze, node.pos)) {
    const hash = neighbour.toString();

    if (!visited.has(hash)) {
      visited.add(hash);
      yield* dfs({ pos: neighbour, prev: node }, visited, params);
    }
  }
};

const start = function* (params: SearchParams): Generator<SearchState> {
  yield* dfs({ pos: params.start }, new Set([params.start.toString()]), params);
};

const depthFirstSearch = { name: "Depth-first search", start, rewind };

export default depthFirstSearch;
