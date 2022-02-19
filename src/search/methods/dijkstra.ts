import PriorityQueue from "ts-priority-queue";
import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import { VecStr } from "../../utils/Vec2d";

type DijkstraSearchNode = SearchNode & { distance: number };

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new PriorityQueue<DijkstraSearchNode>({
    comparator: (a, b) => a.distance - b.distance,
    initialValues: [{ pos: start, distance: 0 }],
  });
  const visited = new Set<VecStr>();

  while (queue.length > 0) {
    const node = queue.dequeue();
    const hash = node.pos.toString();

    if (visited.has(hash)) {
      continue;
    }

    yield { current: node, visited: visited.add(hash), found: target.equals(node.pos) };

    for (const neighbour of getAdjacentPathPositions(maze, node.pos)) {
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
