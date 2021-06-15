import { SearchMethod, SearchNode, SearchParams, SearchState, rewind } from "../";

const dfs = function* (node: SearchNode, visited: Set<string>, params: SearchParams): Generator<SearchState> {
  yield { current: node, visited, found: node.pos.equals(params.target) };

  for (const neighbour of params.map.getNeighbours(node.pos)) {
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

const depthFirstSearch: SearchMethod = { name: "Depth-first search", start, rewind };

export default depthFirstSearch;
