import Maze from "../Maze";
import Vec2d from "../../utils/Vec2d";
import { getAdjacentWallPositions } from "../";

let maze: Maze;

const dfs = function* (pos: Vec2d, visited: Set<string>): Generator<Maze> {
  for (const neighbour of shuffle(getAdjacentWallPositions(maze, pos, 2))) {
    const hash = neighbour.toString();

    if (!visited.has(hash)) {
      yield (maze = maze.toggleWalls([neighbour, new Vec2d((pos.x + neighbour.x) / 2, (pos.y + neighbour.y) / 2)]));
      yield* dfs(neighbour, visited.add(hash));
    }
  }
};

const generate = function* (cols: number, rows: number): Generator<Maze> {
  const start = Vec2d.random(Vec2d.origin(), new Vec2d(cols, rows));
  maze = Maze.full(cols, rows).toggleWall(start);

  yield* dfs(start, new Set([start.toString()]));
};

const shuffle = <T>(arr: T[]) => {
  let currentIndex = arr.length;

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex--);
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
};

const depthFirstSearch = { name: "Depth-first search", generate };

export default depthFirstSearch;
