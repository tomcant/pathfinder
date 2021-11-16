import PriorityQueue from "ts-priority-queue";
import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d from "../../utils/Vec2d";

type AStarSearchNode = SearchNode & {
  distFromStart: number;
  distToTarget: number;
};

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new PriorityQueue<AStarSearchNode>({
    comparator: (a, b) => a.distFromStart - b.distFromStart + a.distToTarget - b.distToTarget,
    initialValues: [{ pos: start, distFromStart: 0, distToTarget: 0 }],
  });
  const visited = new Set<string>();

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
        distFromStart: node.distFromStart + (maze.getWeight(neighbour) || 1),
        distToTarget: manhattanDistance(neighbour, target),
      });
    }
  }
};

const manhattanDistance = (a: Vec2d, b: Vec2d): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

const aStar = { name: "A*", search, rewind, isWeighted: true };

export default aStar;
