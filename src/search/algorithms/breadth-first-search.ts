import { SearchState, SearchNode, SearchParams } from "../search";
import Queue from "../utils/Queue";

const breadthFirstSearch = function* (params: SearchParams): Generator<SearchState> {
  const visited = new Set<string>([params.start.toString()]);
  const queue = new Queue<SearchNode>([{ pos: params.start }]);

  while (!queue.isEmpty()) {
    const current = queue.dequeue() as SearchNode;

    yield { current, visited, found: current.pos.equals(params.target) };

    for (const neighbourPos of params.map.getNeighbours(current.pos)) {
      const hash = neighbourPos.toString();

      if (!visited.has(hash)) {
        visited.add(hash);
        queue.enqueue({
          pos: neighbourPos,
          prev: current,
        });
      }
    }
  }
};

export default breadthFirstSearch;
