import { SearchNode, SearchParams, SearchState, rewind as defaultRewind } from "../";
import { getAdjacentPathPositions } from "../../maze";
import Vec2d from "../../utils/Vec2d";
import Set from "../../utils/CompoundSet";
import Queue from "./utils/Queue";

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
  const visitedForward = new Set<Vec2d>();
  const visitedBackward = new Set<Vec2d>();

  while (!queue.isEmpty()) {
    const { node, direction } = queue.dequeue();
    const pos = node.pos;
    let found;

    switch (direction) {
      case Direction.Forward:
        if (visitedForward.has(pos)) continue;
        found = visitedBackward.has(pos);
        visitedForward.add(pos);
        break;

      case Direction.Backward:
        if (visitedBackward.has(pos)) continue;
        found = visitedForward.has(pos);
        visitedBackward.add(pos);
        break;
    }

    yield {
      current: node,
      visited: new Set([...visitedForward, ...visitedBackward]),
      found,
    };

    for (const neighbour of getAdjacentPathPositions(maze, pos)) {
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
