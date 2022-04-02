import PriorityQueue from "ts-priority-queue";
import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d from "../../utils/Vec2d";
import Set from "../../utils/CompoundSet";

type DijkstraSearchNode = SearchNode & { distance: number };

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new PriorityQueue<DijkstraSearchNode>({
    comparator: (a, b) => a.distance - b.distance,
    initialValues: [{ pos: start, distance: 0 }],
  });
  const visited = new Set<Vec2d>();

  while (queue.length > 0) {
    const node = queue.dequeue();
    const pos = node.pos;

    if (visited.has(pos)) {
      continue;
    }

    yield {
      current: node,
      visited: visited.add(pos),
      found: target.equals(pos),
    };

    for (const neighbour of getAdjacentPathPositions(maze, pos)) {
      queue.queue({
        pos: neighbour,
        prev: node,
        distance: node.distance + (maze.getWeight(neighbour) || 1),
      });
    }
  }
};

const dijkstra = { name: "Dijkstra", search, rewind, isWeighted: true };

export default dijkstra;
