import { SearchState, SearchNode, SearchParams, SearchMethod, rewind } from "../";

const dfs = function* (node: SearchNode, visited: Set<string>, params: SearchParams): Generator<SearchState> {
  yield { current: node, visited, found: node.pos.equals(params.target) };

  for (const neighbourPos of params.map.getNeighbours(node.pos)) {
    const hash = neighbourPos.toString();

    if (!visited.has(hash)) {
      visited.add(hash);
      yield* dfs({ pos: neighbourPos, prev: node }, visited, params);
    }
  }
};

const start = function* (params: SearchParams): Generator<SearchState> {
  yield* dfs({ pos: params.start }, new Set([params.start.toString()]), params);
};

const depthFirstSearch: SearchMethod = { name: "Depth-first search", start, rewind };

export default depthFirstSearch;
