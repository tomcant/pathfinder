import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";
import { getAdjacentWallPositions } from "../";

let maze: Maze;

const generate = function* (cols: number, rows: number): Generator<Maze> {
  const start = Vec2d.random(Vec2d.origin(), new Vec2d(cols, rows));
  maze = Maze.full(cols, rows).toggleWall(start);
  yield* dfs(start, new Set([start.toString()]));
};

const dfs = function* (pos: Vec2d, visited: Set<string>): Generator<Maze> {
  for (const neighbour of shuffle(getAdjacentWallPositions(maze, pos, 2))) {
    const hash = neighbour.toString();

    if (!visited.has(hash)) {
      yield (maze = maze.toggleWalls([neighbour, new Vec2d((pos.x + neighbour.x) / 2, (pos.y + neighbour.y) / 2)]));
      yield* dfs(neighbour, visited.add(hash));
    }
  }
};

const shuffle = <T>(arr: T[]): T[] => {
  let currentIdx = arr.length;

  while (currentIdx > 0) {
    const randomIdx = Math.floor(Math.random() * currentIdx--);
    [arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
  }

  return arr;
};

const depthFirstSearch = { name: "Depth-first search", generate };

export default depthFirstSearch;
