import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import { VecStr } from "../../utils/Vec2d";
import Queue from "./utils/Queue";

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const queue = new Queue<SearchNode>([{ pos: start }]);
  const visited = new Set<VecStr>();

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    const hash = node.pos.toString();

    if (visited.has(hash)) {
      continue;
    }

    yield { current: node, visited: visited.add(hash), found: target.equals(node.pos) };

    for (const neighbour of getAdjacentPathPositions(maze, node.pos)) {
      queue.enqueue({ pos: neighbour, prev: node });
    }
  }
};

const breadthFirstSearch = { name: "Breadth-first search", search, rewind, isWeighted: false };

export default breadthFirstSearch;
