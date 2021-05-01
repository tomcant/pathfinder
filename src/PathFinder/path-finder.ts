import Queue from "./utils/queue";
import Vec2d from "./utils/vec2d";

enum Cell {
  Empty = 0,
  Start = 1,
  Target = 2,
  Wall = 3,
}

type Map = {
  cells: Cell[];
  width: number;
  height: number;
};

type SearchParams = {
  map: Map;
  startPos: Vec2d;
  targetPos: Vec2d;
};

type SearchNode = {
  pos: Vec2d;
  // prev: SearchNode ??
};

type SearchState = {
  node: SearchNode;
  seen: Set<string>;
};

export const breadthFirstSearch = function* (
  params: SearchParams
): Generator<SearchState> {
  const seen = new Set<string>([hashPos(params.startPos)]);
  const queue = new Queue<SearchNode>([{ pos: params.startPos }]);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();

    if (node === undefined) {
      break;
    }

    yield { node, seen };

    for (const neighbourPos of getNeighbours(node.pos, params.map)) {
      const hash = hashPos(neighbourPos);

      if (!seen.has(hash)) {
        seen.add(hash);
        queue.enqueue({ pos: neighbourPos });
      }
    }
  }
};

const getNeighbours = (pos: Vec2d, map: Map): Vec2d[] => {
  const neighbours = [];

  const dirs = [
    { dx: 1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: -1 },
  ];

  for (const { dx, dy } of dirs) {
    const neighbour = pos.add(new Vec2d(dx, dy));

    if (!isWall(neighbour, map)) {
      neighbours.push(neighbour);
    }
  }

  return neighbours;
};

const isWall = (pos: Vec2d, map: Map): boolean =>
  Cell.Wall === map.cells[pos.y * map.width + pos.x];

const hashPos = (pos: Vec2d): string => pos.toString();
