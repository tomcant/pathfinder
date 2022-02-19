import { SearchNode, SearchParams, SearchState, rewind as defaultRewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Queue from "./utils/Queue";
import Vec2d, { VecStr } from "../../utils/Vec2d";

enum Direction {
  Forward,
  Backward,
}

type BiDirSearchNode = {
  node: SearchNode;
  direction: Direction;
};

let nodeHistory: BiDirSearchNode[];

const search = function* ({ maze, start, target }: SearchParams): Generator<SearchState> {
  nodeHistory = [];

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
  const visitedForward = new Set<VecStr>();
  const visitedBackward = new Set<VecStr>();

  while (!queue.isEmpty()) {
    const { node, direction } = queue.dequeue();
    const hash = node.pos.toString();
    let found;

    switch (direction) {
      case Direction.Forward:
        if (visitedForward.has(hash)) continue;
        found = visitedBackward.has(hash);
        visitedForward.add(hash);
        break;

      case Direction.Backward:
        if (visitedBackward.has(hash)) continue;
        found = visitedForward.has(hash);
        visitedBackward.add(hash);
        break;
    }

    yield { current: node, visited: new Set([...visitedForward, ...visitedBackward]), found };

    for (const neighbour of getAdjacentPathPositions(maze, node.pos)) {
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
};

const rewind = (node: SearchNode): Vec2d[] => {
  const intersection = nodeHistory
    .filter(({ node: n }) => node.pos.equals(n.pos))
    .sort(({ direction }) => (direction === Direction.Forward ? -1 : 1));

  return [
    ...defaultRewind(intersection[0].node),
    ...defaultRewind(intersection[intersection.length - 1].node).reverse(),
  ];
};

const biDirBfs = { name: "Bidirectional BFS", search, rewind, isWeighted: false };

export default biDirBfs;
