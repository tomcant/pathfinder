import { SearchMethod, SearchNode, SearchParams, SearchState, rewind as defaultRewind } from "../";
import { getNeighbours } from "../../maze";
import Queue from "./utils/Queue";
import Vec2d from "../../utils/Vec2d";

enum Direction {
  Forward,
  Backward,
}

type BiDirSearchNode = {
  node: SearchNode;
  direction: Direction;
};

let nodeHistory: BiDirSearchNode[];

const start = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  nodeHistory = [];

  const visitedForward = new Set<string>([start.toString()]);
  const visitedBackward = new Set<string>([target.toString()]);

  const queue = new Queue<BiDirSearchNode>([
    {
      node: { pos: start },
      direction: Direction.Forward,
    },
    {
      node: { pos: target },
      direction: Direction.Backward,
    },
  ]);

  while (!queue.isEmpty()) {
    const { node, direction } = queue.dequeue();

    const found =
      (direction === Direction.Forward && visitedBackward.has(node.pos.toString())) ||
      (direction === Direction.Backward && visitedForward.has(node.pos.toString()));

    yield { current: node, visited: new Set([...visitedForward, ...visitedBackward]), found };

    for (const neighbour of getNeighbours(maze, node.pos)) {
      const hash = neighbour.toString();
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
          node: {
            pos: neighbour,
            prev: node,
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
    .filter(({ node: n }) => node.pos.equals(n.pos))
    .sort(({ direction }) => (direction === Direction.Forward ? -1 : 1));

  return [...defaultRewind(intersection[0].node), ...defaultRewind(intersection[1].node).reverse()];
};

const biDirBfs: SearchMethod = { name: "Bidirectional BFS", start, rewind };

export default biDirBfs;
