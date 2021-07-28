import { SearchNode, SearchParams, SearchState, rewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Queue from "./utils/Queue";

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  const visited = new Set<string>([start.toString()]);
  const queue = new Queue<SearchNode>([{ pos: start }]);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    yield { current: node, visited, found: node.pos.equals(target) };

    for (const neighbour of getAdjacentPathPositions(maze, node.pos)) {
      const hash = neighbour.toString();

      if (!visited.has(hash)) {
        visited.add(hash);
        queue.enqueue({ pos: neighbour, prev: node });
      }
    }
  }
};

const breadthFirstSearch = { name: "Breadth-first search", search, rewind };

export default breadthFirstSearch;
