import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d from "../../utils/Vec2d";
import Set from "../../utils/CompoundSet";
import Queue from "./utils/Queue";

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new Queue<SearchNode>([{ pos: start }]);
  const visited = new Set<Vec2d>();

  while (!queue.isEmpty()) {
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
      queue.enqueue({ pos: neighbour, prev: node });
    }
  }
};

const breadthFirstSearch = { name: "Breadth-first search", search, rewind, isWeighted: false };

export default breadthFirstSearch;
