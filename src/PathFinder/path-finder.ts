import SearchMap from "./SearchMap";
import Queue from "./utils/queue";
import Vec2d from "./utils/vec2d";

export type SearchParams = {
  map: SearchMap;
  start: Vec2d;
  target: Vec2d;
};

type SearchNode = {
  pos: Vec2d;
  prev?: SearchNode;
};

type SearchState = {
  node: SearchNode;
  visited: Set<string>;
  foundTarget: boolean;
};

export const breadthFirstSearch = function* (params: SearchParams): Generator<SearchState> {
  const visited = new Set<string>([params.start.toString()]);
  const queue = new Queue<SearchNode>([{ pos: params.start }]);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node === undefined) {
      break;
    }

    yield { node, visited, foundTarget: node.pos.equals(params.target) };

    for (const neighbourPos of params.map.getNeighbours(node.pos)) {
      const hash = neighbourPos.toString();

      if (!visited.has(hash)) {
        visited.add(hash);
        queue.enqueue({
          pos: neighbourPos,
          prev: node,
        });
      }
    }
  }
};
