import { SearchState, SearchNode, SearchParams, SearchMethod } from "../search";
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

const start = function* ({ map, start, target }: SearchParams): Generator<SearchState> {
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

      if (direction === Direction.Forward && !visitedForward.has(hash)) {
        visitedForward.add(hash);
        queue.enqueue({
          searchNode: {
            pos: neighbourPos,
            prev: searchNode,
          },
          direction,
        });
      }

      if (direction === Direction.Backward && !visitedBackward.has(hash)) {
        visitedBackward.add(hash);
        queue.enqueue({
          searchNode: {
            pos: neighbourPos,
            prev: searchNode,
          },
          direction,
        });
      }
    }
  }
};

const rewind = (node: SearchNode): Vec2d[] => {

  return [];
};

const biDirBfs: SearchMethod = { start, rewind };

export default biDirBfs;
