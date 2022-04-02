import PriorityQueue from "ts-priority-queue";
import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d from "../../utils/Vec2d";
import Set from "../../utils/CompoundSet";

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new PriorityQueue<SearchNode>({
    comparator: (a, b) => manhattanDistance(a.pos, target) - manhattanDistance(b.pos, target),
    initialValues: [{ pos: start }],
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
      queue.queue({ pos: neighbour, prev: node });
    }
  }
};

const manhattanDistance = (a: Vec2d, b: Vec2d): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const greedyBestFirstSearch = { name: "Greedy best-first search", search, rewind, isWeighted: false };

export default greedyBestFirstSearch;
