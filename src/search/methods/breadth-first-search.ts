import { SearchState, SearchNode, SearchParams, SearchMethod, rewind } from "../search";
import Queue from "../utils/Queue";

const start = function* ({ map, start, target }: SearchParams): Generator<SearchState> {
  const visited = new Set<string>([start.toString()]);
  const queue = new Queue<SearchNode>([{ pos: start }]);

  while (!queue.isEmpty()) {
    const searchNode = queue.dequeue() as SearchNode;

    yield { current: searchNode, visited, found: searchNode.pos.equals(target) };

    for (const neighbourPos of map.getNeighbours(searchNode.pos)) {
      const hash = neighbourPos.toString();

      if (!visited.has(hash)) {
        visited.add(hash);
        queue.enqueue({
          pos: neighbourPos,
          prev: searchNode,
        });
      }
    }
  }
};

const bfs: SearchMethod = { name: "Breadth First Search", start, rewind };

export default bfs;
