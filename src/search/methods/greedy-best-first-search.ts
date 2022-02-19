import PriorityQueue from "ts-priority-queue";
import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d, { VecStr } from "../../utils/Vec2d";

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new PriorityQueue<SearchNode>({
    comparator: (a, b) => manhattanDistance(a.pos, target) - manhattanDistance(b.pos, target),
    initialValues: [{ pos: start }],
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
      queue.queue({ pos: neighbour, prev: node });
    }
  }
};

const manhattanDistance = (a: Vec2d, b: Vec2d): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const greedyBestFirstSearch = { name: "Greedy best-first search", search, rewind, isWeighted: false };

export default greedyBestFirstSearch;
