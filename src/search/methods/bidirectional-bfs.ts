import { SearchState, SearchNode, SearchParams, SearchMethod, rewind as defaultRewind } from "../search";
import Queue from "../utils/Queue";
import Vec2d from "../utils/Vec2d";

enum Direction {
  Forward,
  Backward,
}

type BiDirSearchNode = {
  searchNode: SearchNode;
  direction: Direction;
};

let nodeHistory: BiDirSearchNode[];

const start = function* ({ map, start, target }: SearchParams): Generator<SearchState> {
  nodeHistory = [];

  const visitedForward = new Set<string>([start.toString()]);
  const visitedBackward = new Set<string>([target.toString()]);

  const queue = new Queue<BiDirSearchNode>([
    {
      searchNode: { pos: start },
      direction: Direction.Forward,
    },
    {
      searchNode: { pos: target },
      direction: Direction.Backward,
    },
  ]);

  while (!queue.isEmpty()) {
    const { searchNode, direction } = queue.dequeue() as BiDirSearchNode;

    const found =
      (direction === Direction.Forward && visitedBackward.has(searchNode.pos.toString())) ||
      (direction === Direction.Backward && visitedForward.has(searchNode.pos.toString()));

    yield { current: searchNode, visited: new Set([...visitedForward, ...visitedBackward]), found };

    for (const neighbourPos of map.getNeighbours(searchNode.pos)) {
      const hash = neighbourPos.toString();
      let enqueue = false;

      if (direction === Direction.Forward) {
        if (!visitedForward.has(hash)) {
          visitedForward.add(hash);
          enqueue = true;
        }
      } else if (!visitedBackward.has(hash)) {
        visitedBackward.add(hash);
        enqueue = true;
      }

      if (enqueue) {
        const neighbourNode = {
          searchNode: {
            pos: neighbourPos,
            prev: searchNode,
          },
          direction,
        };

        nodeHistory.push(neighbourNode);
        queue.enqueue(neighbourNode);
      }
    }
  }
};

const rewind = (node: SearchNode): Vec2d[] => {
  const intersection = nodeHistory
    .filter(({ searchNode }) => node.pos.equals(searchNode.pos))
    .sort(({ direction }) => (direction === Direction.Forward ? -1 : 1));

  return [...defaultRewind(intersection[0].searchNode), ...defaultRewind(intersection[1].searchNode).reverse()];
};

const biDirBfs: SearchMethod = { name: "Bidirectional BFS", start, rewind };

export default biDirBfs;
