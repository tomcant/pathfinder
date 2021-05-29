import PriorityQueue from "ts-priority-queue";
import { SearchState, SearchNode, SearchParams, SearchMethod, rewind } from "../";
import Vec2d from "../utils/Vec2d";

const manhattanDistance = (a: Vec2d, b: Vec2d): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const start = function* ({ map, start, target }: SearchParams): Generator<SearchState> {
  const visited = new Set<string>([start.toString()]);

  const queue = new PriorityQueue<SearchNode>({
    comparator: (a, b) => manhattanDistance(a.pos, target) - manhattanDistance(b.pos, target),
    initialValues: [{ pos: start }],
  });

  while (queue.length > 0) {
    const searchNode = queue.dequeue();

    yield { current: searchNode, visited, found: searchNode.pos.equals(target) };

    for (const neighbourPos of map.getNeighbours(searchNode.pos)) {
      const hash = neighbourPos.toString();

      if (!visited.has(hash)) {
        visited.add(hash);
        queue.queue({
          pos: neighbourPos,
          prev: searchNode,
        });
      }
    }
  }
};

const greedyBestFirstSearch: SearchMethod = { name: "Greedy best-first search", start, rewind };

export default greedyBestFirstSearch;
